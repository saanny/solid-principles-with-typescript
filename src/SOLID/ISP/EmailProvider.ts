export default interface EmailProvider {
    sendEmail (message: string): void
}
