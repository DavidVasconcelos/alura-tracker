import { NotificationType } from "@/interfaces/INotification";
import { store } from "@/store";
import { NOTIFY } from "@/store/MutationType";

export const notificationMixin = {
    methods: {
        notify(type: NotificationType, title: string, text: string) : void {
            store.commit(NOTIFY, {
                type,
                title,
                text
            });
        }
    },
}