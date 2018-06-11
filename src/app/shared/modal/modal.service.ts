export class ModalService {

    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string) {
        this.findModal(id).open();
    }

    close(id: string) {
        this.findModal(id).close();
    }

    openEvent(event: any) {
        this.findModal(`${event.constructor.name}Modal`).openEvent(event);
    }

    private findModal(id: string): any {
        return this.modals.filter(x => x.id === id)[0];
    }

}
