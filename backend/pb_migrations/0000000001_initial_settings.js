// Notes: This migration only executes once, when the app is first installed.
// Any changes in .env will not reflected to the database.

migrate((db) => {
  const dao = new Dao(db)
  const settings = dao.findSettings()
  const admin = new Admin()

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
    accessKey: process.env.AWS_ACCESS_KEY_ID,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    forcePathStyle: true
  }
  settings.s3 = s3 // For media
  settings.backups.s3 = s3 // For backups
  settings.backups.cron = process.env.BACKUP_CRON

  // Save Settings
  dao.saveSettings(settings)

  // Create Admin User
  admin.email = process.env.ADMIN_EMAIL
  admin.setPassword(process.env.ADMIN_PASSWORD)
  dao.saveAdmin(admin)

}, (db) => {
  return null
})
