<?php
/**
 * Скрипт отправки заявки на ТКП
 * Загрузите этот файл в корень вашего WordPress сайта
 * или в папку wp-content/themes/ваша-тема/
 */

// Разрешаем CORS для локальной разработки (уберите в production если не нужно)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Обработка preflight запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Только POST запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Метод не поддерживается']);
    exit;
}

// Получаем данные
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Нет данных']);
    exit;
}

// === НАСТРОЙКИ SMTP ===
$smtp_server = "smtp.mail.ru";
$smtp_port = 465;
$sender_email = "turbopodbor@mail.ru";
$sender_password = "qNbTejrNOJjF9qiDXwpK";
$receiver_email = "sktb_razvitie1@turbo-don.ru";

// Данные из формы
$mask = isset($input['mask']) ? htmlspecialchars($input['mask']) : 'Не указана';
$tab_name = isset($input['tab']) ? htmlspecialchars($input['tab']) : 'Не указано';
$parameters = isset($input['parameters']) ? $input['parameters'] : [];
$timestamp = date('d.m.Y H:i:s');

// Формируем параметры в текстовом виде
$params_text = "";
if (!empty($parameters)) {
    foreach ($parameters as $key => $value) {
        $params_text .= "  • " . htmlspecialchars($key) . ": " . htmlspecialchars($value) . "\n";
    }
}

// Формируем тело письма
$subject = "=?UTF-8?B?" . base64_encode("Заявка на ТКП: $mask") . "?=";

$body = "
═══════════════════════════════════════════════════
ЗАЯВКА НА ВЫСТАВЛЕНИЕ ТКП
═══════════════════════════════════════════════════

СФОРМИРОВАННАЯ МАСКА:
$mask

РАЗДЕЛ:
$tab_name

ВЫБРАННЫЕ ПАРАМЕТРЫ:
$params_text

═══════════════════════════════════════════════════
Дата и время заявки: $timestamp
═══════════════════════════════════════════════════

---
Автоматическое уведомление из системы подбора датчиков давления
";

// Заголовки письма
$headers = [
    "From: =?UTF-8?B?" . base64_encode("Подбор датчиков") . "?= <$sender_email>",
    "Reply-To: $sender_email",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "X-Mailer: PHP/" . phpversion()
];

// Пробуем отправить через SMTP
$sent = false;
$error_message = "";

// Вариант 1: Если есть PHPMailer (рекомендуется для WordPress)
if (file_exists(__DIR__ . '/wp-includes/PHPMailer/PHPMailer.php')) {
    require __DIR__ . '/wp-includes/PHPMailer/PHPMailer.php';
    require __DIR__ . '/wp-includes/PHPMailer/SMTP.php';
    require __DIR__ . '/wp-includes/PHPMailer/Exception.php';
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = $smtp_server;
        $mail->SMTPAuth = true;
        $mail->Username = $sender_email;
        $mail->Password = $sender_password;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $smtp_port;
        $mail->CharSet = 'UTF-8';
        
        $mail->setFrom($sender_email, 'Подбор датчиков');
        $mail->addAddress($receiver_email);
        
        $mail->Subject = "Заявка на ТКП: $mask";
        $mail->Body = $body;
        
        $mail->send();
        $sent = true;
    } catch (Exception $e) {
        $error_message = $mail->ErrorInfo;
    }
}

// Вариант 2: Используем WordPress wp_mail если доступен
if (!$sent && function_exists('wp_mail')) {
    $sent = wp_mail($receiver_email, "Заявка на ТКП: $mask", $body, $headers);
    if (!$sent) {
        $error_message = "wp_mail не смог отправить письмо";
    }
}

// Вариант 3: Стандартный mail() PHP
if (!$sent) {
    $sent = @mail($receiver_email, $subject, $body, implode("\r\n", $headers));
    if (!$sent) {
        $error_message = "Стандартная функция mail() не доступна";
    }
}

// Отправляем ответ
if ($sent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Заявка успешно отправлена на ' . $receiver_email
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'error' => 'Не удалось отправить: ' . $error_message
    ]);
}
?>

