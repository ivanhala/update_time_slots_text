var special_dates = '05/13/2021,05/14/2021';
var spevial_time_text = 'your custom text';

jQuery(document).on('wbk_timeslots_rendered', function( event, container ){
   special_dates_arr = special_dates.split(',');
   var cur_date = jQuery('#wbk-slots-container').find('.wbk-day-title').html().trim();
   
   if(special_dates_arr.indexOf(cur_date) != -1){
       jQuery('.wbk-slot-time').html(spevial_time_text);
   }  
});
