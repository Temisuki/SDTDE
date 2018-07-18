export class ItemsActions {
    changeQuantity(items) {
        items['items']['item'].forEach(lol => {
            this.itemHasQuantityProperty(lol);
        });
        return items;
    }

    itemHasQuantityProperty(item) {
        item['property'].forEach(property => {
            if (property['$'].name + '' === 'Stacknumber') {
                this.changeStackNumber(property);
            }
        });
    }

    changeStackNumber(property) {
        property.$.value = 8000 + '';
    }
}