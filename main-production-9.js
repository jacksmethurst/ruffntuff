console.log('connected!');

// side scroll jack

$('body').prepend(`

	<style>
	
		#dialogue-small {
			transition: transform 1s ease, opacity 1s ease;
		}
	
		#dialogue-small.hidden,#dialogue-small.roaded {
			transform: translateY(100%);
			opacity: 0;
		}
		
		.ui-navigation {
			transisiton: opacity 1s ease;
		}
		
		.ui-navigation.roaded {
			pointer-events: none;
			opacity: 0;
		}
		
		#roadmap-info-wrap {
			pointer-events: none;
		}
		
		#roadmap-info-wrap .roadmap-info-item {
			position: absolute;
			bottom: 0;
			left: 0;
			opacity: 0;
			pointer-events: none;
			transform: translateY(20px);
			transition: opacity 0s ease, transform 0s ease;
		}
		
		#roadmap-info-wrap .roadmap-info-item.active {
			opacity: 1;
			transform: translateY(0px);
			transition: opacity 1s ease, transform 1s ease;
		}
		
		#roadmap-info-wrap .roadmap-info-item.active .roadmap-info-close {
			pointer-events: all;
		}
		
		#team-caro-wrap {
			display: flex;
			opacity: 0;
			pointer-events: none;
			transition: opacity .6s ease;
			background: none;
		}
		
		#team-caro-wrap.active {
			display: flex;
			opacity: 1;
			pointer-events: all;
		}
		
		#team-caro-wrap > .overlay {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #000;
			opacity: .8;
			cursor: pointer;
		}
		
		#team-caro-wrap .team-carousel {
			pointer-events: none;
		}
		
		#team-caro-wrap.active .team-caro-card {
			pointer-events: all;
		}
		
		#team-caro-wrap.active .team-caro-card >img.caro-card-profile {
			height: 45vh !important;
			width: auto;
			aspect-ratio: 1/1;
			margin: 0 auto;
			max-width: 100%;
			max-height: 300px;
		}
		
		#team-caro-wrap .owl-item {
			transform: scale(.8);
			transition: transform .4s ease;
		}
		
		#team-caro-wrap .owl-item.active {
			transform: scale(1);
		}
		
		#audio-toggle-wrap >img:last-of-type {
			display: none;
		}
		
		#audio-toggle-wrap >p {
			user-select: none;
		}
		
		#audio-toggle-wrap >p:after {
			content: ' off'
		}
		
		#audio-toggle-wrap.active >img:first-of-type {
			display: none;
		}
		
		#audio-toggle-wrap.active >img:last-of-type {
			display: block;
		}
		
		#audio-toggle-wrap.active >p:after {
			content: ' on'
		}
		
		@keyframes rotation {
			0% {
				transform: scale(1);
			}
			50% {
				transform: scale(.7);
			}
			100% {
				transform: scale(1);
			}
		}
		
		#loader {
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			width: 100%;
			background: #212022;
			z-index: 99999;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			transition: opacity .6s ease;
		}
		
		#loader >svg {
			display: block;
			height: 10vh;
			width: auto;
			animation: rotation 2s infinite linear;
		}
		
		#loader.hidden {
			opacity: 0;
			pointer-events: none;
		}
		
		.ui-navigation {
			pointer-events: none;
		}
		
		.ui-navigation * {
			pointer-events: all;
		}
		
		@media screen and (max-width: 575px){
			
			.roadmap-info-close {
				right: auto;
				left: 50%;
				transform: translateX(-50%);
			}
			
		}
		
		@media screen and (max-height: 400px){
			#d-3-2 {
				right: -120px;
			}
		}
		
	</style>

`);

// team wrapper click close

$('#team-caro-wrap').prepend(`<div class="overlay"></div>`);

// loader

$('#loader').prepend(`<svg width="145" height="300" viewBox="0 0 145 300" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_43_81)">
	<path d="M144.15 155.85H93.3084H50.8413V198.317V300H93.3084V196.639H144.15V155.85Z" fill="#FF6A03"/>
	<path d="M144.15 0H0V144.15H42.4671V71.2971L114.74 144.15H144.15V115.32L107.861 79.0309L144.15 42.7416V0Z" fill="#FF6A03"/>
	<path d="M15.4674 197.341V186.968L27.1977 197.341H42.4669V155.85H27.1977V166.223L15.4674 155.85H0.213379V197.341H15.4674Z" fill="#FF6A03"/>
	</g>
	<defs>
	<clipPath id="clip0_43_81">
	<rect width="144.15" height="300" fill="white"/>
	</clipPath>
	</defs>
</svg>`);

// Audio

$('body').append('<audio id="bg-audio" src="https://newgenre.studio/wp-content/uploads/2022/06/ES_Rain-Suburb-2-SFX-Producer.mp3" muted loop></audio>');
$('body').append('<audio id="bg-audio-music" src="https://newgenre.studio/wp-content/uploads/2022/06/ES_PREL-Beat-Electroni-2-SFX-Producer.mp3" muted loop></audio>');

$('body').append('<audio class="actor-voice" id="actor-voice-1" src="https://newgenre.studio/wp-content/uploads/2022/07/1.mp3" autostart="false" muted></audio>');
$('body').append('<audio class="actor-voice" id="actor-voice-2" src="https://newgenre.studio/wp-content/uploads/2022/07/2.mp3" autostart="false" muted></audio>');
$('body').append('<audio class="actor-voice" id="actor-voice-3" src="https://newgenre.studio/wp-content/uploads/2022/07/3.mp3" autostart="false" muted></audio>');
$('body').append('<audio class="actor-voice" id="actor-voice-4" src="https://newgenre.studio/wp-content/uploads/2022/07/4.mp3" autostart="false" muted></audio>');
$('body').append('<audio class="actor-voice" id="actor-voice-5" src="https://newgenre.studio/wp-content/uploads/2022/07/5.mp3" autostart="false" muted></audio>');
	
$('.actor-voice').prop('muted', true).prop('volume', 1);

$('#bg-audio').prop('muted', true).prop('volume', 0.5);
$('#bg-audio-music').prop('muted', true).prop('volume', 0.05);

var sound_btn = $('#audio-toggle-wrap');

// on window resize if window is bigger than 768px

		if ($(window).width() < 768) {
			$('#audio-toggle-wrap').hide();
		} else {
			$('#audio-toggle-wrap').show();
		}

	$(window).resize(function() {
		if ($(window).width() < 768) {
			$('#audio-toggle-wrap').hide();
		} else {
			$('#audio-toggle-wrap').show();
		}
	});

sound_btn.click(function(){
	
	// if has class active
	if($(this).hasClass('active')){
		$('.actor-voice').prop('muted', true);
		$('#bg-audio').prop('muted', true);
		$('#bg-audio-music').prop('muted', true);
		$(this).removeClass('active');
	} else {
		$('.actor-voice').prop('muted', false);
		$('#bg-audio')[0].play();
		$('#bg-audio-music')[0].play();
		$('#bg-audio').prop('muted', false);
		$('#bg-audio-music').prop('muted', false);
		$(this).addClass('active');
	}
	
});
	
// play voice

function play_voice(i){
	
	$('.actor-voice').prop('muted', false);
	
	// if #audio-toggle-wrap has class active
	if($('#audio-toggle-wrap').hasClass('active')){
			
		$('.actor-voice').prop('volume', 0);
		$('.actor-voice')[0].pause();
		
		$(`#actor-voice-${i}`)[0].currentTime = 0;
		$(`#actor-voice-${i}`).prop('volume', 1);
		$(`#actor-voice-${i}`)[0].play();
	
	}
	
}

// Dialogue

$('#dialogue-small').addClass('hidden');

function type_bar(e) {
	
	if(e != undefined){
		
		$('#dialogue-small').addClass('hidden');
		$('#type-write').text(e);
		$('#dialogue-small').removeClass('hidden');
		
	} else {
		
		$('#dialogue-small').addClass('hidden');
		
	}
 
}

// add ids to sections

$(".wrapper > .section").each(function(i, e) {
	i = i+1;
	$(e).attr("id", "section-" + i);
	$(e).children(':not(img.section-image)').each(function(j,k) {
		j = j+1;
		$(k).attr("id",  `d-${i}-${j}`);
	});
});

// Horizontal Scrolling

Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
	
	
	$('#loader').addClass('hidden');
	
	
  //  scroll functionality  

	gsap.registerPlugin(ScrollTrigger);

	const sections = gsap.utils.toArray(".section");
	// const sectionstest = gsap.utils.toArray(".section#test");
	let maxWidth = 0;

	const getMaxWidth = () => {
		maxWidth = 0;
		sections.forEach((section) => {
			maxWidth += section.offsetWidth;
		});
	};
	getMaxWidth();
	ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

	gsap.to(sections, {
		x: () => `-${maxWidth - window.innerWidth}`,
		ease: "none",
		scrollTrigger: {
			trigger: ".wrapper",
			pin: true,
			scrub: 1,
			end: () => `+=${maxWidth}`,
			invalidateOnRefresh: true
		}
	});

	var d_small = $('#dialogue-small');

	sections.forEach((sct, i) => {
				
		ScrollTrigger.create({
			trigger: sct,
			start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
			end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
			toggleClass: {targets: sct, className: "active"},
			onEnter: function(sct,i){

				var string = $(sct.trigger).data('type');
				
				type_bar(string);
				
				// get id of $(sct.trigger)
				var id = $(sct.trigger).attr('id');
				
				// remove section- from id
				id = id.replace('section-', '');
				
				play_voice(id);

			},
			onEnterBack: function(sct,i){

				var string = $(sct.trigger).data('type');
				
				type_bar(string);
				
				// get id of $(sct.trigger)
				var id = $(sct.trigger).attr('id');
				
				// remove section- from id
				id = id.replace('section-', '');
				
				play_voice(id);

			},
		});
	});
	
	// individual elements
	
	// section 2
	
	const sec_2 = document.getElementById("section-2");

	var tl_d_2_1 = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl_d_2_1.to("#d-2-1", {x: -200, duration: 3});

	ScrollTrigger.create({
		trigger: sec_2,
		start: () => 'top top-=' + (sec_2.offsetLeft - window.innerWidth/2 - 400) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sec_2.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		animation: tl_d_2_1,
		scrub: 1
	});
	
	// section 3
	
	const sec_3 = document.getElementById("section-3");

	var tl_d_3_1 = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl_d_3_1.to("#d-3-1", {x: -200, duration: 1});

	ScrollTrigger.create({
		trigger: sec_3,
		start: () => 'top top-=' + (sec_3.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sec_3.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		animation: tl_d_3_1,
		scrub: 1
	});

	var tl_d_3_2 = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl_d_3_2.to("#d-3-2", {x: -400, duration: 1});

	ScrollTrigger.create({
		trigger: sec_3,
		start: () => 'top top-=' + (sec_3.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sec_3.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		animation: tl_d_3_2,
		scrub: 1
	});
	
	// section 4
	
	const sec_4 = document.getElementById("section-4");
	
	// section 5
	
	const sec_5 = document.getElementById("section-5");

	var tl_d_5_1 = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl_d_5_1.to("#d-5-1", {x: -100, duration: 1});

	ScrollTrigger.create({
		trigger: sec_5,
		start: () => 'top top-=' + (sec_5.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sec_5.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		animation: tl_d_5_1,
		scrub: 1
	});

	var tl_d_5_2 = gsap.timeline({repeat: 0, repeatDelay: 0});
	tl_d_5_2.to("#d-5-2", {x: -300, duration: 1});

	ScrollTrigger.create({
		trigger: sec_5,
		start: () => 'top top-=' + (sec_5.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
		end: () => '+=' + sec_5.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
		animation: tl_d_5_2,
		scrub: 1
	});
	
	

	// nav click
	
	const team_members_list = document.getElementById("team-members-list");
	
	$('#nav-manifesto').click(function() {
	
		gsap.to(window, {duration: 1, scrollTo: (sec_2.offsetLeft) * (maxWidth / (maxWidth - window.innerWidth))});
		
	});
	
	$('#nav-culprits').click(function() {
	
		gsap.to(window, {duration: 1, scrollTo: (sec_3.offsetLeft + 700) * (maxWidth / (maxWidth - window.innerWidth))});
		
	});
	
	$('#nav-roadmap').click(function() {
	
		gsap.to(window, {duration: 3, scrollTo: (sec_4.offsetLeft - 150) * (maxWidth / (maxWidth - window.innerWidth))});
		
	});

	// navigation scrolling
	
	var nav_left = $('#nav-left');
	var nav_right = $('#nav-right');
	
	nav_left.click(function(){
		gsap.to(window, {duration: .5, scrollTo: (window.scrollY - 1000), ease: "linear"});
	});
	
	nav_right.click(function(){
		gsap.to(window, {duration: .5, scrollTo: (window.scrollY + 1000), ease: "linear"});
	});
	
	// arrow keys
	
	$(document).keydown(function(e) {
		
		if (e.keyCode == 39 || e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 68) {
			gsap.to(window, {duration: .01, scrollTo: (window.scrollY + 100), ease: "linear"});
		}
		
		if (e.keyCode == 37 || e.keyCode == 40 || e.keyCode == 83 || e.keyCode == 65) {
			gsap.to(window, {duration: .01, scrollTo: (window.scrollY - 100), ease: "linear"});
		}
		
	});
	
	// poster random rotations
	
	$('.team-members-list >div >img').each(function(e){
		
		// console.log(e);
		
		// rotate element randomly between -10 and 10
		
		var rotation = Math.floor(Math.random() * 20) - 10;
		
		$(this).css('transform', 'rotate(' + rotation + 'deg)');
		
	});
	
	// team carousel
	
	$('#team-caro').owlCarousel({
    loop:true,
    nav:false,
		dots: false,
		center: true,
    responsive:{
        0:{
            items:1,
						margin:30
        },
        600:{
            items:1,
						margin:30
        },
        1000:{
            items:1,
						margin:150
        }
    }
	});
	
	function toggle_team() {
		
		var team_caro = $('#team-caro-wrap');
		
		$('#dialogue-small').toggleClass('roaded');
		
		team_caro.toggleClass('active');
		
	}
	
	$('.team-members-list .team-member').click(function(){
		
		toggle_team();
		
	});
	
	$('#close-team-caro').click(function(){
		
		toggle_team();
		
	});
	

	$('#team-caro-wrap > .overlay').click(() => toggle_team());
	
	// add css acept-ratio: 1/1 to .caro-card-profile
	
	$('.caro-card-profile').css('height', '100%');
	
	// for each .team-member add data-member-link number going up
	
	var team_member_count = 0;
	
	$('.team-member').each(function(){
		
		$(this).attr('data-member-link', team_member_count);
		
		team_member_count++;
		
	});
	
	// on click of .team-member go to carousel slide with data-member-link number
	
	$('.team-member').click(function(){
		
		var member_link = $(this).attr('data-member-link');
		
		$('#team-caro').trigger('to.owl.carousel', [member_link, 1000]);
		
	});
	
	// add css overflow visible to .owl-stage-outer
	
	$('.owl-stage-outer').css('overflow', 'visible');
	
	// ROADMAP
	
	var roadmap_wrap = $('#roadmap-info-wrap');
	
	roadmap_wrap.removeClass('hidden');
	
	var roadmap_wrap_items = roadmap_wrap.find('.roadmap-info-item');
	
	var roadmap = $('#roadmap-ul');
	var roadmap_items = roadmap.find('.roadmap-grid-item');
	
	roadmap_items.each(function(){
		
		var item = $(this);
		
		// get index of item
		
		var index = item.index();
		
		item.hover(
			
			function(){
				var alt_tag = item.find('img').attr('alt');
				type_bar(`${alt_tag}`);
			},
			function(){
				type_bar('First comes the plan, then comes the roadmap');
			}
			
		);
		
		item.click(function(){
			
			var i = index+1;
			
			console.log(i);
			
			roadmap_wrap_items.removeClass('active');
			$(`#rii-${i}`).addClass('active');
			
			$('#dialogue-small').addClass('roaded');
			$('.ui-navigation').addClass('roaded');
			
			// roadmap_items opacity .5
			
			roadmap_items.css('opacity', '.5');
			roadmap_items.find('img').css('transform', 'scale(1)');
			
			// item opacity 1
			
			item.css('opacity', '1');
			item.find('img').css('transform', 'scale(1.1)');
			
		});
		
	});
	
	// for each roadmap_wrap_items add id = roadmap-info-item-#
	
	roadmap_wrap_items.each(function(e){
		
		e = e+1;
		
		$(this).attr('id', 'rii-' + e);
		
	});
	
	function close_road_info(){
		
		roadmap_wrap_items.removeClass('active');
			
		roadmap_items.attr('style', '');
		roadmap_items.find('img').attr('style', '');
		
		$('#dialogue-small').removeClass('roaded');
		$('.ui-navigation').removeClass('roaded');
		
	}
	
	$('.roadmap-info-close').click(function(){
		close_road_info();
	});

	// Escape key press
	
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			console.log('this is a test');
			close_road_info();
			$('#team-caro-wrap').removeClass('active');
	 }
	});
	
	// end of promise

});