<?php

return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=fga',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',
        ],
//        'mailer' => [
//            'class' => 'yii\swiftmailer\Mailer',
//            'viewPath' => '@common/mail',
//            // send all mails to a file by default. You have to set
//            // 'useFileTransport' to false and configure a transport
//            // for the mailer to send real emails.
//            'useFileTransport' => true,
//        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' => false,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'encryption' => 'ssl',
                'host' => 'mail.hosting.reg.ru',
                'port' => '465',
                'username' => 'info@b-product.ru',
                'password' => 'hO8mX8hB2ujO3m',
            ],
        ],
    ],
];
