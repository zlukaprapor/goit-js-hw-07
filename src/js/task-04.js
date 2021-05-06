const CounterPlugin = function ({
    rootSelector,
    counterValue = 0, 
    step = 1 } = {})

{
    this._value = counterValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
    this.updateValueUI();
}

CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    // refs.container = document.querySelector(rootSelector);
    refs.increment = document.querySelector('[data-action = "increment"]')
    refs.decrement = document.querySelector('[data-action = "decrement"]')
    refs.value = document.querySelector('#value');

    return refs;

}

CounterPlugin.prototype._bindEvents = function () {
    this._refs.increment.addEventListener('click', () => {
        console.log("CounterPlugin.prototype._bindEvents -> this", this)
        this.increment();
        this.updateValueUI();
    });

 
     
    this._refs.decrement.addEventListener('click', () => {
     console.log("CounterPlugin.prototype._bindEvents -> this", this)
        this.decrement();
        this.updateValueUI();
        
    })
}

    CounterPlugin.prototype.updateValueUI = function () {
        this._refs.value.textContent = this._value;
}   

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
}

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
}


 new CounterPlugin({ rootSelector: '#counter', step: 1 });

