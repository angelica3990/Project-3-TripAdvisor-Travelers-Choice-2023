// Declare global variables for use in all functions (populated in init function)
var beachInfo = [];
var hotelInfo = [];
var restaurantInfo = [];
var thingsInfo = [];
var destinationInfo = [];

// select unordered list id
let menuLnk = d3.select("#ulmenu")

// function to handle click event of menu list
function handleClick() {
    
    targetId = d3.event.target.id;
    let dataSet = [];

    if (targetId == 'beaches') {
       dataSet = beachInfo;        
    }
    else if (targetId == 'hotels') {
        dataSet = hotelInfo;
    }
    else if (targetId == 'restaurants') {
        dataSet = restaurantInfo;
    }    
    else if (targetId == 'things') {
        dataSet = thingsInfo;
    }
    else if (targetId == 'destinations') {
        dataSet = destinationInfo;
    };

    buildImageSection(dataSet);
    //buildChartSection(dataSet);
    //buildMapSection(dataSet);
    
}

// Event handler for click of menu list items
menuLnk.on('click', handleClick);
    

// function to build Section 1 - images, name and description
function buildImageSection(catData) {
    
    // Populate image section
    let unpicList = d3.select('#islot');
    // Remove all links under the id (populated from earlier views)
    d3.select('#islot').selectAll("li").remove();
    d3.select('#islot').selectAll("h3").remove();
    d3.select('#islot').selectAll("p").remove();

    // loop thru category dataset and add list items with images
    for (i=0; i < catData.length; i++) {
        
        let rankName = "";
        if ((catData[i].name == "") || (catData[i].location == catData[i].name)) {
            rankName = catData[i].rank.toString().concat(". ").concat(catData[i].location)
        }
        else {
            rankName = catData[i].rank.toString().concat(". ").concat(catData[i].name).concat(" ").concat(catData[i].location)
        }

        unpicList.append('li').append('img').attr("id", "pics").attr("src", catData[i].imageurl).attr('alt', 'Not Available')
        unpicList.append('h3').attr("id", "rankName").text(rankName)
        unpicList.append('p').attr("id", "imgDesc").text(catData[i].description)
    }
}

// Populate chart section (using Plotly)
// function buildChartSection(catData) {
//     // var v = ['16', '26', '128', '635', '6574'];

//     let data = [{
//         values: [16, 26, 128, 635, 6574],
//         labels: ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'],
//         domain: {column: 0},
//         hoverinfo: 'label+percent+value',    
//         text: data.values,
//         textposition: 'inside',
//         hole: .5,
//         type: 'pie'
//     }];

//     let layout = {
//         title: 'Customer Review Counts',
//         annotations: [
//             {font: {size: 20}, showarrow: false, text: '7378', textposition: 'inside'}
//         ],
//         height: 400,
//         width: 400,        
//         showlegend: true,
//         grid: {rows: 1, columns: 1}
//     };

//     Plotly.newPlot('myChart', data, layout);
// }
    
    

// Populate map section
// function buildMapSection() {

// }



function init() {

    // read json files and store in variables for use later
    // Note: for very large datasets storing is not adviseable - read and populate when required
    d3.json("static/data/beaches.json").then(function(data) {
        beachInfo = data;        
    })

    d3.json("static/data/hotels.json").then(function(data) {
        hotelInfo = data;        
    })

    d3.json("static/data/things.json").then(function(data) {
        thingsInfo = data;        
    })

    d3.json("static/data/restaurants.json").then(function(data) {
        restaurantInfo = data;        
    })

    d3.json("static/data/destinations.json").then(function(data) {
        destinationInfo = data;        
    })    
    
};

init();
