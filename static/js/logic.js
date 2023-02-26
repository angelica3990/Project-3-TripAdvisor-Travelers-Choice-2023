// Declare global variables to hold datasets populated in init
var beachInfo = [];
var hotelInfo = [];
var restaurantInfo = [];
var thingsInfo = [];
var destinationInfo = [];
// height used to set height of donut chart section based on category
var height = 0;
var selCategory = "";

// select unordered list id
let menuLnk = d3.select("#ulmenu")

// function to handle click event of menu list
function handleClick() {
    
    targetId = d3.event.target.id;
    let dataSet = [];

    if (targetId == 'beaches') {
       dataSet = beachInfo;
       height = 12991;        
    }
    else if (targetId == 'hotels') {
        dataSet = hotelInfo;
        height = 12923;
    }
    else if (targetId == 'restaurants') {
        dataSet = restaurantInfo;
        height = 12926;
    }    
    else if (targetId == 'things') {
        dataSet = thingsInfo;
        height = 13350; 
    }
    else if (targetId == 'destinations') {
        dataSet = destinationInfo;
        height = 15009;
    };
    selCategory = targetId;
    
    buildPageSections(dataSet);
    if (selCategory != 'destinations') {
        buildChartSection(dataSet);
    };
    buildMapSection(dataSet);
    
}

// Event handler for click of menu list items
menuLnk.on('click', handleClick);
    

// function to build Section 1 - images, name and description ==============================================================================
function buildPageSections(catData) {    
    
    // Clear nodes built earlier
    let unpicList = d3.select('#islot');
    let chrt = d3.select('#myChart');

    // Remove all links under the id (populated from earlier views)
    d3.select('#islot').selectAll("li").remove();
    d3.select('#islot').selectAll("h3").remove();
    d3.select('#islot').selectAll("p").remove();

    // Remove any chart data already built     
    d3.select('#myChart').selectAll("div").remove();
    d3.select('#myChart').selectAll("svg").remove();
    d3.select('#myChart').selectAll("defs").remove();
    d3.select('#myChart').selectAll("g").remove();
    
    // loop thru category dataset and add list items with images
    for (i=0; i < catData.length; i++) {   
               
        let rankName = "";
        if ((catData[i].name == "") || (catData[i].location == catData[i].name)) {
            rankName = catData[i].rank.toString().concat(". ").concat(catData[i].location)
        }
        else {
            rankName = catData[i].rank.toString().concat(". ").concat(catData[i].name).concat(" (").concat(catData[i].location).concat(")")
        }

        unpicList.append('li').append('img').attr("id", "pics").attr("src", catData[i].imageurl).attr('alt', 'Not Available')
        unpicList.append('h3').attr("id", "rankName").text(rankName)
        unpicList.append('p').attr("id", "imgDesc").text(catData[i].description)

    };
};

// Section 2 - charts for reviews display ==================================================================================================
function buildChartSection(catData) {

    let data = [];    
    let legendGroup = "";
    let rowNum = 0;
    let rvwLabels = ['Excellent', 'Very Good', 'Average', 'Poor', 'Terrible'];
    // let colorPallette = ['#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043']; pink shade
    // let colorPallette = ['#4dac26', '#b8e186', '#f7f7f7', '#f1b6da', '#d01c8b']; combo shades
    // let colorPallette = ['#08519c', '#3182bd', '#6baed6', '#bdd7e7', '#eff3ff']; blue shade
    // let colorPallette = ['#993404', '#d95f0e', '#fe9929', '#fed98e', '#ffffd4']; brown shade
    let colorPallette = ['#33DFA1', '#384B42', '#9BB0A5', '#00D2FF', '#009CF6'];

    for (i=0; i < catData.length; i++) {
        let dict = {};
        let rvwValues = [];        
        let rvwTotal = "";
        rowNum = i;
        legendGroup = rowNum.toString();
        rvwTotal = catData[i]['total_reviews'].toString() + '<br>' + catData[i].rate.toString();
        rvwValues.push(catData[i]['excellent']);
        rvwValues.push(catData[i]['very_good']);
        rvwValues.push(catData[i]['average']);
        rvwValues.push(catData[i]['poor']);
        rvwValues.push(catData[i]['terrible']);

        dict = {
            values: rvwValues,
            labels: rvwLabels,
            hoverinfo: 'label+percent+value',
            text: rvwValues,            
            textposition: 'inside',
            title: {text: rvwTotal, font: {size: 25, family:'Poppins, sans-serif', color: 'black'}},
            marker: {colors: colorPallette },    //include for outline "line: {color: 'black', width: 1}"
            domain: {row: rowNum, column: 0},
            legendgroup: legendGroup,
            hole: .5,
            type: 'pie'
        };
        data.push(dict);        
    };

    let layout = {
        title: 'Customer Review Counts',
        height: height,
        width: 400,
        showlegend: false,
        grid: {rows: 25, columns: 1, pattern: 'independent', roworder: 'top to bottom'},
        annotations: {font: {size: 25, weight: 'bold'}, showarrow: true}, //color: 'white' in font if bg color changed
        legend: {tracegroupgap: 200, xanchor: 'right', yanchor: 'center', x: 1.5, y: 0.5},
        //paper_bgcolor: '#D3D3D3',    
        margin: {'t': 50, 'b': 0, 'l': '50', 'r': 50}                   
    }
    
    Plotly.newPlot('myChart', data, layout)
};
   

// Section 3 - build leaflet map and mark location based on lat and lon =================================================================
function buildMapSection(catData) {

    

    // Set map container to null to clear previous loads
    var container = L.DomUtil.get('myMap');
    if (container != null) {        
        container._leaflet_id = null;
    };

    var map = L.map("myMap", { 
        center: [20, 10],
        zoom: 2
    });

    // Add the tile layer that will be the background of map.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
         // Add the tile layer that will be the background of map.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // create markers - bind popup
    for (i=0; i < catData.length; i++) {
        let lat = catData[i].latitude;
        let lon = catData[i].longitude;
        let icon = L.divIcon({
            className: 'custom-marker',
            html: '<div class="marker-label">' + catData[i]['rank'] + '</div>',
            iconSize: [30, 30]
        });
        let locMarker = L.marker([lat, lon], { icon: icon });
        locMarker.bindPopup("<h1> Rank: " + catData[i]['rank'] + "<h2> Name: " + catData[i]['name'] +"</h2><h2> Location: " + catData[i]['location'] + "</h2><h3>" + catData[i]['description']);
        locMarker.addTo(map);        
    };
}

function init() {

    // read json files and store in variables for use later
    // Note: for very large datasets storing is not adviseable - read and populate when required
    d3.json("json/beaches_merged.json").then(function(data) {
        beachInfo = data;                  
    })

    d3.json("json/hotels_merged.json").then(function(data) {
        hotelInfo = data;              
    })

    d3.json("json/things_merged.json").then(function(data) {
        thingsInfo = data;               
    })

    d3.json("json/hotels_merged.json").then(function(data) {
        restaurantInfo = data;                
    })

    d3.json("json/destinations.json").then(function(data) {
        destinationInfo = data;                
    })    
    
};

init();
