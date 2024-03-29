function setupSettings() {
    const dao = new Dao($app.db())
    const settings = dao.findSettings()

    // App Settings
    settings.meta.appName = process.env.APP_NAME
    settings.meta.appUrl = process.env.APP_URL

    // SMTP Settings
    settings.meta.senderName = process.env.SENDER_NAME
    settings.meta.senderAddress = process.env.SENDER_ADDRESS
    settings.smtp.enabled = true
    settings.smtp.username = process.env.SMTP_USERNAME
    settings.smtp.password = process.env.SMTP_PASSWORD
    settings.smtp.host = process.env.SMTP_HOST
    settings.smtp.port = process.env.SMTP_PORT

    // S3 Settings
    const s3 = {
        enabled: process.env.S3_ENABLED === 'true' ? true : false,
        bucket: process.env.S3_BUCKET,
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
        accessKey: process.env.S3_ACCESS_KEY_ID,
        secret: process.env.S3_SECRET_ACCESS_KEY,
    }
    settings.s3 = s3 // For media
    settings.backups.s3 = s3 // For backups
    settings.backups.cron = process.env.BACKUP_CRON

    // Save Settings
    dao.saveSettings(settings)
}

$app.rootCmd.addCommand(new Command({
    use: "setup_settings",
    run: (cmd, args) => {
        setupSettings()
    },
}))