export interface MainProcessAPI {
  sendMail: (subject: string, body: string) => Promise<void>,
}

declare global {
  interface Window {
    main_process: MainProcessAPI
  }
}
