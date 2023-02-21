var cnt = 3;
var sData = [];  // Should declare variables for values for different datasets to hold hotels.json, beaches.json... and use in functions

for (i=0; i < cnt; i++) {
    if (i == 0) {
         sData.push({'pic': 'https://media-cdn.tripadvisor.com/media/photo-o/03/ca/1d/ec/grace-bay.jpg',
                'name': 'Pic1', 'desc': "Desc1 this is pic1"});
    }       
    if (i == 1) {
        sData.push({'pic': 'https://media-cdn.tripadvisor.com/media/photo-s/16/23/47/10/img-20190108-120940-largejpg.jpg',
                'name': 'Pic2', 'desc': "Desc2 this is pic2"});
    }  
    if (i == 2) {
        sData.push({'pic': 'https://media-cdn.tripadvisor.com/media/photo-s/10/c3/13/f6/amazing-reef-and-colour.jpg',
               'name': 'Pic3', 'desc': "Desc3 this is pic3"});
    }
}
const cData = sData;   // Preparing var and moving to 'const' to be able to access in all functions - clarify with Alejandro

function optionClicked(oid) {
    if (oid == 'beaches') {
       buildBeachInfo();
     }
    else if (oid == 'hotels') {
        buildHotelInfo();
    }
    else if (oid == 'restaurants') {
        buildRestaurantsInfo();
    }    
    else if (oid == 'things') {
        buildThings();
    }
    else if (oid == 'destinations') {
        buildDestinations();
    }
};

function buildBeachInfo() {
    // Populate image section
    let unpicList = d3.select('#islot');
    for (i=0; i < cnt; i++) {
        unpicList.append('li').append('img').attr("id", "pics").attr("src", cData[i].pic).attr('alt', 'Not Available')
        unpicList.append('h3').text(cData[i].name)
        unpicList.append('p').text(cData[i].desc)
    }

    // Populate chart section (using Plotly)
    var v = ['16', '26', '128', '635', '6574'];
    let data = [{
        values: [16, 26, 128, 635, 6574],
        labels: ['Terrible', 'Poor', 'Average', 'Very Good', 'Excellent'],
        domain: {column: 0},
        hoverinfo: 'label+percent+value',    
        text: v,
        textposition: 'inside',
        hole: .5,
        type: 'pie'
    }];

    let layout = {
        title: 'Customer Review Counts',
        annotations: [
            {font: {size: 20}, showarrow: false, text: '7378', textposition: 'inside'}
        ],
        height: 400,
        width: 400,        
        showlegend: true,
        grid: {rows: 1, columns: 1}
    };

    Plotly.newPlot('myChart', data, layout);
    
    

    //Populate map section

}

