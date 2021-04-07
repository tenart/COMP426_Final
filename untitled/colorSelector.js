let colorSelector = function (min, max, initVal) {

    // set them as a method!!!!
    this.getMin = function () {
        return min;
    };
    this.getMax = function () {
            return max;
    };
    this.getValue = function () {
        return rangeSlider.value;
    };
    this.setValue = function (newValue) {
        //bounds checking... min -> max -> then set value
        //value = (newValue < min) ? min : (newValue > max) ? max: newValue;
        rangeSlider.value = newValue;
        entry.value = rangeSlider.value;

    }

    let entryDiv = document.createElement('div');
    let rangeSlider = document.createElement('input');
    rangeSlider.setAttribute('type', 'range');
    rangeSlider.setAttribute('min', min);
    rangeSlider.setAttribute('max', max);
    rangeSlider.setAttribute('initVal', initVal);
    rangeSlider.style.width = "250px";


    let entry = document.createElement('input');
    entry.setAttribute('type', 'text');
    entry.style.width = "25px";
    entry.value = rangeSlider.value;

    entryDiv.append(rangeSlider);
    entryDiv.append(entry);
    entryDiv.style.width = "290px";

    this.getDiv = function () {
        return entryDiv;
    }

    rangeSlider.addEventListener('input', () => {
        entry.value = rangeSlider.value;
    })

    entry.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            let newValue = parseInt(entry.value);
            if (!isNaN(newValue)) {
                rangeSlider.value = newValue;
            }
            entry.value = rangeSlider.value;
            }
    })

    let listeners = [];

    this.addChangeListener = function (l) {
        listeners.push(l);
    }

}
