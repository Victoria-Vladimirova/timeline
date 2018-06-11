export abstract class BusinessEvent {

    constructor(public _id: string, public date: Date) {
        this._id = _id;
        this.date = date;
    }

    get eventDate(): string {
        return `${this.pad(this.date.getDate())}.${this.pad(this.date.getMonth() + 1)}.${this.pad(this.date.getFullYear())}`;
    }

    set eventDate(eventDate: string) {
        if (!eventDate || !/\d\d.\d\d.\d\d\d\d/.test(eventDate)) {
            return;
        }

        const parts = eventDate.split('.');

        this.date.setDate(parseInt(parts[0]));
        this.date.setMonth(parseInt(parts[1]) - 1);
        this.date.setFullYear(parseInt(parts[2]));
    }

    get eventTime(): string {
        return `${this.pad(this.date.getHours())}:${this.pad(this.date.getMinutes())}:${this.pad(this.date.getSeconds())}`;
    }

    set eventTime(eventTime: string) {
        if (!eventTime || !/\d\d:\d\d(:\d\d)?/.test(eventTime)) {
            return;
        }

        const parts = eventTime.split(':');

        this.date.setHours(parseInt(parts[0]));
        this.date.setMinutes(parseInt(parts[1]));
        this.date.setSeconds(parts[2] !== undefined ? parseInt(parts[2]) : 0);
    }

    private pad(num: number): string {
        if (num > 9) {
            return '' + num;
        } else {
            return '0' + num;
        }
    }

}
