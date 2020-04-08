export default class GameEventsModalService {
    statTypes;
    constructor(statTypes) {
        this.statTypes = statTypes;
    }
    setPTS() {
        const type = this.statTypes.filter(type => type.abbreviation === 'FTA');
    }
    setStat(abbreviation) {
        const type = this.statTypes.filter(type => type.abbreviation === abbreviation)[0];
        return {
            stat_type_id: type.id,
            value: type.default_value,
        }
    }
}
