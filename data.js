var data =[
        { unit: "m3/h", factor: 1 },
        { unit: "l/s", factor: 0.2777777778 },
        { unit: "usgpm", factor: 4.4028675393 },
        { unit: "l/min", factor: 16.666666667 },
        { unit: "ft3/h", factor: 35.314666721 }
    ];

// to obtain all units for the drop down menu
const units = data.map(function (dat){
    return dat.unit;
});

// function to get index based on the unit selected
function get_Index(param){
    var index = data.findIndex(p => p.unit == param);
    return index;
}

// function to get the coversion factor of the "from" unit
function get_from_factor(from){
    var val = data[get_Index(from)].factor;
    return val;
}

// function to get the coversion factor of the "to" unit
function get_to_factor(to){
    var val = data[get_Index(to)].factor;
    return val;
}