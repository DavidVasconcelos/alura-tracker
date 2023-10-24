import { NotificationType } from "@/interfaces/INotification"
import { store } from "@/store"
import { NOTIFY } from "@/store/MutationType"

type Notifier = {
    notify: (type: NotificationType, title: string, text: string) => void
}

export default() : Notifier => {
    
    const notify = (type: NotificationType, title: string, text: string) : void => {
        store.commit(NOTIFY, {
            type,
            title,
            text
        })
    }

    return {
        notify
    }

}