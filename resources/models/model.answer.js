export default class Answer {
    constructor() {
        /**
         * @type {?number}
         */
        this.id = null;

        /**
         * @type {string}
         */
        this.answer = '';
    }

    /**
     * @param {{}} rawData
     * @return {Answer}
     */
    static fromArray(rawData) {
        let answer = new Answer();
        answer.id = rawData.id;
        answer.answer = rawData.answer;

        return answer;
    }
}