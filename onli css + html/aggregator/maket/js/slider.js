const courses__slider = document.getElementById('courses__slider');
if(courses__slider){
	noUiSlider.create(courses__slider, {
    start: [0, 999999],
    connect: true,
	 stap: 1,
    range: {
        'min': [0],
        'max': [999999],
    }
});
const input0 = document.getElementById('courses__slider-input-1');
const input1 = document.getElementById('courses__slider-input-2');
const inputs = [input0, input1]

courses__slider.noUiSlider.on('update', function(values, handle){
	inputs[handle].value = Math.round(values[handle])
});
}
const courses__slider3 = document.getElementById('courses__slider-3');
if(courses__slider){
	noUiSlider.create(courses__slider3, {
    start: [0, 999999],
    connect: true,
	 stap: 1,
    range: {
        'min': [0],
        'max': [999999],
    }
});
const input0 = document.getElementById('courses__slider-input-5');
const input1 = document.getElementById('courses__slider-input-6');
const inputs = [input0, input1]

courses__slider3.noUiSlider.on('update', function(values, handle){
	inputs[handle].value = Math.round(values[handle])
});
}

const courses__slider2 = document.getElementById('courses__slider-2');
if(courses__slider){
	noUiSlider.create(courses__slider2, {
    start: [0, 36],
    connect: true,
	 stap: 1,
    range: {
        'min': [0],
        'max': [36],
    }
});
const input3 = document.getElementById('courses__slider-input-3');
const input4 = document.getElementById('courses__slider-input-4');
const inputs = [input3, input4]

courses__slider2.noUiSlider.on('update', function(values, handle){
	inputs[handle].value = Math.round(values[handle])
});
}

const courses__slider4 = document.getElementById('courses__slider-4');
if(courses__slider){
	noUiSlider.create(courses__slider4, {
    start: [0, 36],
    connect: true,
	 stap: 1,
    range: {
        'min': [0],
        'max': [36],
    }
});
const input3 = document.getElementById('courses__slider-input-7');
const input4 = document.getElementById('courses__slider-input-8');
const inputs = [input3, input4]

courses__slider4.noUiSlider.on('update', function(values, handle){
	inputs[handle].value = Math.round(values[handle])
});
}
$(document).ready(function () {
	$.each($('.courses__price-item-modified'), function(index, val) {
	if($(this).find('input').prop('checked')==true){
	$(this).addClass('active');
	}
	});
	$(document).on('click','.courses__price-item-modified', function(event) {
	$(this).parents('.courses__price').find('.courses__price-item-modified').removeClass('active');
	$(this).parents('.courses__price').find('.courses__price-item-modified input').prop('checked',false);
	$(this).toggleClass('active');
	$(this).find('input').prop('checked', true);
	return false;
	});

	$.each($('.courses__price-item-lvl'), function(index, val) {
	if($(this).find('input').prop('checked')==true){
	$(this).addClass('active');
	}
	});
	$(document).on('click','.courses__price-item-lvl', function(event) {
	$(this).parents('.courses__price').find('.courses__price-item-lvl').removeClass('active');
	$(this).parents('.courses__price').find('.courses__price-item-lvl input').prop('checked',false);
	$(this).toggleClass('active');
	$(this).find('input').prop('checked', true);
	return false;
	});

	$.each($('.courses__price-item-ordinary'), function(index, val) {
	if($(this).find('input').prop('checked')==true){
	$(this).addClass('active');
	}
	});
	$(document).on('click','.courses__price-item-ordinary', function(event) {
	$(this).toggleClass('active');
	$(this).find('input').prop('checked', true);
	return false;
	});
});