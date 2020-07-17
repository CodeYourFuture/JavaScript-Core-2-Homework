let candidate = {
    minSalary: 15000
};

let job = {
    maxSalary: 130000
};




function match(candidate, job) {
    // is this job a valid match for the candidate?
      let tenPercent = candidate.minSalary * 0.1;
  
      if(!candidate.minSalary || !job.maxSalary){
         throw new Error('my custom error');
  
      }else {
          return (candidate.minSalary - tenPercent) <= job.maxSalary;
      }
  
    
  }

  console.log(match(candidate, job));