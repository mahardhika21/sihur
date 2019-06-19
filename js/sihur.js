function hitung()
	{
			let valueData = new Object();
					valueData.this_date    = document.getElementById('this_date').value;
					valueData.this_month   = document.getElementById('this_month').value;
					valueData.this_year    = document.getElementById('this_year').value;
					valueData.my_birt_date = document.getElementById('my_birt_date').value;
					valueData.my_birt_mont = document.getElementById('my_birt_mont').value;
					valueData.my_birt_year = document.getElementById('my_birt_year').value;

			console.log(valueData);

		

			let result_obj = diff_of_date(valueData);

			console.log(result_obj);
			let result = 'Usia and adalah '+ result_obj.year +' tahun '+ result_obj.month +' bulan '+ result_obj.day +' hari';
			document.getElementById('me_old_year').value = result;

	}

	function diff_of_date(valueData) 
	{
		
		let date1  = new Date(valueData.this_year,valueData.this_month - 1,valueData.this_date);
		let date2  = new Date(valueData.my_birt_year,valueData.my_birt_mont - 1,valueData.my_birt_date);

	  

	    let year1  = date1.getFullYear(); 
	    let month1 = date1.getMonth(); 
	    let day1   = date1.getDate();
	    let year2  = date2.getFullYear(); 
	    let month2 = date2.getMonth(); 
	    let day2   = date2.getDate();
	   
	    if(day1 < day2) 
	    {
	        month1--;
	        day1 += day_in_month(year2, month1);
	    }

	    if (month1 < month2)
	    {
	        year1--;
	        month1 += 12;
	    }
       
        let result = new Object()
        	result.year  = year1 - year2;
        	result.month = month1 - month2;
        	result.day   = day1 - day2;
	    
		
		return result;
	}

	function day_in_month(year, month) 
	{
    	with (new Date(year, month, 1, 12)) 
	    	{
	        	setDate(0);
	        	return getDate();
	    	}
	}
