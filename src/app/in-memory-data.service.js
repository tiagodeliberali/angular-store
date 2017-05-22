"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'Ovo de Pascoa', price: 15.50 },
            { id: 2, name: 'Bolo de Festa', price: 25.30 },
            { id: 3, name: 'Tapete de Cozinha', price: 190.00 },
            { id: 4, name: 'Tapete de Banheiro', price: 120.00 }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map