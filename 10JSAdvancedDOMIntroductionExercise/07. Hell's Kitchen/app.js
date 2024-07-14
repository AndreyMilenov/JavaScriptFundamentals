function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const inputElement = JSON.parse(document.querySelector('#inputs textarea').value);
      const outputBestRestaurant = document.querySelector('div#bestRestaurant p');
      const outputWorkers = document.querySelector('div#workers p');





      let restaurants = [];
      let restaurant = {};
      let worker = {};


      for (const restaurantElement of inputElement) {

         const element = restaurantElement.split(' - ')
         const workers = element[1].split(', ');


         if (restaurants.find(res => res.name === element[0])) {
            const workerList = [];
            for (let i = 0; i < workers.length; i++) {
               worker = {
                  name: workers[i].split(' ')[0],
                  salary: workers[i].split(' ')[1],
               }
              let work = restaurants.find(res => res.name === element[0]);
                  work.worker.push(worker);
                  worker = {};
            }

         } else  {
            const workerList = [];
            for (let i = 0; i < workers.length; i++) {
               worker = {
                  name: workers[i].split(' ')[0],
                  salary: workers[i].split(' ')[1],
               }
               workerList.push(worker);
               worker = {};
            }
            restaurant = {
               name: element[0],
               worker: workerList,
            }
            restaurants.push(restaurant);
            restaurant = {};
         }

      }

      const bestRestaurant = bestAveg(restaurants);
      let workers = [];
      bestRestaurant.workers.forEach(w => workers.push(`Name: ${w.name} With Salary: ${w.salary}`));

      outputBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${(Number(bestRestaurant.bestPWorker[0].salary)).toFixed(2)}`
      outputWorkers.textContent = workers.join(' ');

   }
  function bestAveg(restaurants) {

      let best = {};
      let list = [];

     for (const restaurant of restaurants) {

        let  salaries = restaurant.worker
            .reduce((sum, worker) => sum += Number(worker.salary),0);
        let highestSalary = restaurant.worker.find((a,b) => a.salary > b.salary);

        best = {
           name: restaurant.name,
           avgSalary: (salaries / restaurant.worker.length).toFixed(2),
           bestPWorker: restaurant.worker.sort((a,b) => b.salary - a.salary ),
           workers: restaurant.worker
        }

        list.push(best);
        best = {};

     }

     list.sort((a,b) => b.avgSalary - a.avgSalary )
     return list[0];
  }

}


