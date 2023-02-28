// eslint-disable-next-line import/no-extraneous-dependencies
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('main_process', {
  sendMail: (subject: string, body: string) => ipcRenderer.invoke('send-mail', { subject, body }),
});
