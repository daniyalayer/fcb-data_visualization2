console.log ("Hello world!");

// from span
const dateElement = document.getElementById('date');
console.log(dateElement)


//gets current date
let currentDate = new Date();
dateElement.innerHTML= currentDate;


// to lessen the details
let dataOptions = {year: "numeric", month: "long", day: "numeric"};


//en us is to remove details, dataoption kay for readabiity na word and day and year is numeric sya etc. 
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);



// requirements to access the trending topics so since nag change link man no need yung options
const url = "https://fakestoreapi.com/products"
const options = {
};

//to request data from the url, submitting also the values from options, gi submit si options
fetch(url, options)
.then(res => res.json())
.then(data => {
    console.log(data);

    /*
    //to mimic the information of real world objects
    let products = [
        {
            title: "Lip Stick",
            price: 199.9,
            description: "rose, red lipstick",
            category: "beauty product",
            image: null,
            rating: {
                rate: 5,
                count: 100
            }
        },
        {
            title: "Lip Stick 2",
            price: 199.9,
            description: "lush pink lipstick",
            category: "beauty product",
            image: null,
            rating: {
                rate: 4,
                count: 100
            }
        }
    ];
    console.log(products);
    console.log(products[0].title);
    console.log(products[0].price);
    console.log(products[0].rating.rate);
    */

    let titles = data.map(object => {
        console.log(object);
        console.log(object.title);
        return object.title; //add title per object to the "titles" storage
    });

    console.log(titles);
// compiled all the rate per object and store it to the ratings storage
    let ratings = data.map(object =>{
        return object.rating.rate; //add the rate inside the rating property per object to "ratings" storage
    })
    console.log(ratings);

    const myChart = document.getElementById("myChart");
// gina call niya sa id
    let barChart = new Chart(myChart, {
        type:'bar',
        data:{
            labels: titles, 
            datasets: [{
                label: 'Ratings of Products', //title ng bars yung main title
                data: ratings, //basis of bar levels is based on compiled ratings per object of the retrieved data from our fetch request
                borderWidth: 2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
	    		    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ]
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y:{
                    beginAtZero: true
                }
            }
        }
    });
})