/* muscle */
/*
	Variation 2 CHANGES:
	of muscle cramps -> leg
	end muscle cramps -> leg
*/
console.log('[CXL] Experiment running.');
function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() {
            defer(method);
        }, 50);
    }
}

defer(function() {
    $ = jQuery;
    
    // h1
	var h1 = $('.main-content h1');
	h1.remove();
//	$('.main-content').before('<div class="cxl_header_container"><div class="cxl_header"><div class="cxl_dr_says">Dr. Oz Says:</div>' + h1.html().substring(13) + '</div></div>');
	$('.main-content').before('<div class="cxl_header_container"><div class="cxl_header"><div class="cxl_dr_says">Dr. Oz Says:</div>The Real Cause of Nighttime <strong>Muscle Cramps and Leg Cramps</strong> (and Cramps During the Day Too) is a <strong>Severe Magnesium Deficiency</strong>. And the <strong>Solution is High-Dose, High Absorbing Magnesium</strong>.</div></div>');
	
	//remove video then add lady+text
	$('.landing-module-wrapper.default:nth-of-type(1)').html('<div class="cxl_lady_pic"></div><div class="cxl_lady_text"><p>But Not All Magnesium Pills Are Equal!</p><p>The low-quality magnesium pills from the drug store aren’t very effective. Why? Because they don\'t absorb, cause awful digestive upset, and have unnatural fillers & ingredients you want to avoid.</p><p>(By the way, did you know that taking calcium makes cramps much worse?)</p></div>');
	
	//tabs 1
	var tab1 = $('.landing-module.landing-full-width-feature.has-content .rte>div:nth-of-type(1)');
	var tab2 = $('.landing-module.landing-full-width-feature.has-content .rte>div:nth-of-type(3)');
	var h3 = $('.landing-module.landing-full-width-feature.has-content .rte>h3');
	var ul = $('.landing-module.landing-full-width-feature.has-content .rte ul.landing-borders');//for cxl_bottle_text
	$('.landing-module-wrapper.default:nth-of-type(2)').remove();
	$('.landing-module-wrapper.default').after('<div class="cxl_tab_container cxl_first"><div class="cxl_tab_header_top active"></div><div class="cxl_tab_header_top"></div><div class="cxl_tab_header active" style="border-right: none;" >The Cause of Cramps</div><div class="cxl_tab_header" style="cursor: default; background: #fff; border-top: none; height: 25px; border-left: 1px solid #D0D0D0;"></div><div class="cxl_tab_content active"><p>According to...</p><p><strong>...Dr. Oz</strong>, Dr. Weil, and medical experts at the famous Mayo Clinic, <strong>low magnesium is a major cause of muscle cramps</strong> everywhere in the body. (this includes leg and foot cramps). In fact, <strong>78% of Americans have a severe lack of magnesium</strong>. This is a big problem -- because magnesium is a necessary nutrient vital for health.</p><p><strong>Your body needs magnesium</strong> to stop pain, swelling, tension and inflammation. Studies show that by <strong>fixing a magnesium deficiency, it is possible to end muscle cramps</strong> and <strong>stop them from ever coming back</strong>. And unfortunately, no prescription medication can fix low magnesium.</p><p><strong>So what is the solution?</strong></p></div><div class="cxl_tab_content"><p><strong>' + h3.html() + '</strong></p>' + tab2.html() + '</div></div>');
		
	$('body').on('click', '.cxl_tab_container.cxl_first .cxl_tab_header', function(){
		//console.log( $('.cxl_tab_container div').index(this) );
		
		var element_nr = $('.cxl_tab_container.cxl_first div').index(this) - 2;//2-3 -> 0-1 -> left-right
		console.log( element_nr );
		
		if( element_nr == 0 ){
			$('.cxl_tab_container.cxl_first div').removeClass('active');
			$('.cxl_tab_container.cxl_first div:even()').addClass('active');
		}
		else if( element_nr == 1 ){
			/*
			$('.cxl_tab_container.cxl_first div').removeClass('active');
			$('.cxl_tab_container.cxl_first div:odd()').addClass('active');
			*/
		}
	});
	
	//ul list
	$('.cxl_tab_container').after('<div class="cxl_bottle_container"><div class="cxl_bottle_text_header">Cramp Defense®: Your Solution to Stopping and Preventing Cramps</div><div class="cxl_bottle_pic"><div class="cxl_bottle_pic2"></div><a href="/pages/reviews"><span class="big-review-badge"><span class="spr-badge" id="spr_badge_139226889" data-rating="4.2944199706314246"><span class="spr-starrating spr-badge-starrating"><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star-half-alt" style="color: #ffe733;"></i></span><span class="spr-badge-caption">Read Our <span class="spr-review-badge-num">1373</span> <span class="spr-review-badge-word">reviews</span></span></span></span></a></div><div class="cxl_bottle_text"><p><strong>Cramp Defense®</strong> is Unique and Not Sold in Stores. <strong>It is the Only Magnesium Supplement Designed to Restore Magnesium Quickly, Without Side Effects.</strong></p><ul><li><strong>High-Absorbing:</strong> Our form of magnesium is organic, allowing you to absorb it easily. (If your body doesn\'t absorb it, it cannot work!)</li><li><strong>Fast:</strong> It starts absorbing immediately and becomes even more effective with time.</li><li><strong>Side Effect & Weird Ingredient-Free:</strong> It causes no stomach upset or laxative effect and contains no binders, coatings or extras.</li><li><strong>Active ingredient:</strong> Only product to contain Truemag®, a fully reacted magnesium bound to malate, which is the form of magnesium used by nature in fruit and vegetables.</li><li><strong>Made in the USA</strong> and manufactured in an FDA inspected facility.</li></ul></div></div>');

	//gauarantee
	$('.cxl_bottle_container').after('<div class="cxl_guarantee_container"><div class="cxl_guarantee_left_side"><div class="cxl_guarantee_header"><p>We’re so confident <strong>Cramp Defense®</strong> will work for<br /> you, that we offer a <strong>120 Day Money Back Guarantee</strong></p></div><div class="cxl_guarantee_buy"><a style="width: 307px; height: 64px; font-size: 24px; padding: 10px 0 0 20px;" class="button" href="/products/cramp-defense-1-month-size-bottle" onclick="_gaq.push([\'_trackEvent\', \'Actions\', \'Clicks2\', \'BuyNowClick\']);">BUY DIRECT &amp; SAVE $10</a><span>OR</span><a onclick="_gaq.push([\'_trackEvent\', \'Actions\', \'Clicks2\', \'BuyNowClick\']);" title="Am" href="http://amzn.to/2z3eyrK" target="_blank"><img alt="" src="//cdn.shopify.com/s/files/1/0064/0762/files/amazon.jpg?14734161581889106855"></a></div><div class="cxl_guarantee_logos"><img class="cxl_guarantee_logo1" src="https://cdn.shopify.com/s/files/1/0064/0762/assets/paypalcards.jpg"><a class="cxl_guarantee_logo2" title="BBB " href="http://www.bbb.org/houston/business-reviews/vitamins-and-food-supplements/mgbright-llc-in-houston-tx-90028682/" target="_blank"><img alt="" src="//cdn.shopify.com/s/files/1/0064/0762/files/bbb2_compact.jpg?101612"></a><img class="cxl_guarantee_logo3" src="//cdn.shopify.com/s/files/1/0064/0762/t/18/assets/seal.png?17789414751142929504"></div></div><div class="cxl_guarantee_pic"></div></div>');

	//moving testimonials
	var testimonials = $('.content-testimonials-wrapper');//.clone();
	testimonials.remove();

	//tabs 2
	$('.cxl_guarantee_container').after('<div class="cxl_tab_container cxl_second"><div class="cxl_tab_header_top active"></div><div class="cxl_tab_header_top"></div><div class="cxl_tab_header active">Reviews</div><div class="cxl_tab_header">Frequently Asked Questions</div><div class="cxl_tab_content active"><div class="content-testimonials-wrapper"><div class="testimonials" style="padding-top: 0;"><div class="quovolve-box play"><div class="cxl_slider slider r__evolver quovolve" style="position: relative; height: 516px;"><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-1-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>I hope this product continues to perform as experienced so far. I’ll let you know, but for now, I am thrilled. Cramp Defense has very simply, exceeded my expectations! After experiencing 20 plus years of suffering and pain, this is simply amazing.</i><br></div><div class="author"><strong>William Zaspel, Crab Orchard, KY.</strong></div></div></div><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-2-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>If I take two, I usually will not have ANY cramps during the night! I would not be without them in my medicine cabinet.</i><br></div><div class="author"><strong>Kari Olson, New Libson, WI.</strong></div></div></div><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-3-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>I am going to give my doctor your website address and let him know what an easy "fix" this is for a serious complaint. I don\'t think our physicians know much about this so I am going to let mine know of my success.</i><br></div><div class="author"><strong>Julianne Hay, Manitoba, Canada.</strong></div></div></div><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-4-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>As soon as I started taking it the situation improved. I only take one a day and that seems to do the trick for me so a bottle lasts a long time.</i><br></div><div class="author"><strong>Carol Marsh, La Palma, CA.</strong></div></div></div><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-5-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>Half way through the bottle, my husband was mentioning he has not had a single leg cramp.</i><br></div><div class="author"><strong>Beate Brueland, Salome, AZ.</strong></div></div></div><div class="quote-set tiny"><div class="quote quote-left"><div><a href="#" class="prev"></a><img class="quote-image" src="//cdn.shopify.com/s/files/1/0064/0762/t/24/assets/revolving-testimonials-6-image.png?2882"><a href="#" class="next"></a></div><div><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i></div><div><br><i>I began taking your product one week ago. I had almost immediate results and last night was my FIRST night where I was not awakened by miserable cramps in the last 20 years….so thank you so much.</i><br></div><div class="author"><strong>Sheila Nietfeld; Sun City, AZ.</strong></div></div></div></div></div></div><div class="review-link"><span class="spr-starrating spr-badge-starrating"><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star" style="color: #ffe733;"></i><i class="spr-icon spr-icon-star-half-alt" style="color: #ffe733;"></i></span><div><a href="/pages/reviews"><span class="spr-badge" id="spr_badge_139226889" data-rating="4.29278951201748"><span class="spr-badge-caption">View all&nbsp;<span class="spr-review-badge-num">1373 </span><span class="spr-review-badge-word">reviews</span></span></span></a></div></div></div></div><div class="cxl_tab_content"><div class="cxl_faq_q">How Does it Work?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Fixing a Magnesium Deficiency is Fast, Easy, Safe and Powerful Because it Can Attack Muscle Cramps from Multiple Angles.</p><p style="text-decoration: underline;">This crucial mineral can….</p><p><ul><li><p>Loosen muscles by blocking the effect of calcium, which tightens muscles. As people age, excess calcium collects in the muscles, causing cramps. (Also, beware that calcium supplements, especially with Vitamin D, can cause calcium overload!)</p></li><li><p>Increase the absorption of potassium, which is critical for proper muscle function.</p></li><li><p>Decrease pain by blocking pain receptors in the brain and nervous system.</p></li><li><p>Dampen inflammation in the muscles and the entire body.</p></li><li><p>Relaxes blood vessels and decreases blood pressure, which restores healthy circulation.</p></li><li><p>Increases your serotonin, GABA and melatonin, which helps you relax and fall asleep.</p></li></ul></p></div><div class="cxl_faq_q">Why is Cramp Defense® Unique?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Cramp Defense® is unique because it fixes cramps at the <strong>root cause</strong> -- safely and without side-effects.</p><p>It is the only product that contains <strong>Truemag®</strong>, a fully reacted magnesium bound to malate, which is the form of magnesium used by nature in fruit and vegetables. This makes it high-absorbing and non-laxative, able to replenish your magnesium levels quickly, and stop cramps and spasms fast and for good.</p></div><div class="cxl_faq_q">How Effective is Cramp Defense®, Really? And How Quickly Does it Work?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>In our experience, many people get significant results from our product. Some people have become totally free of muscle cramps. Others have seen a significant decrease in the pain and/or frequency of their symptoms. This could mean that the pain is cut in half, or they only get cramps once a week instead of every night. Everyone is different. However, some people do not see results, even after increasing their dose and taking it for more than a month. This usually means that magnesium deficiency is not causing their problems. This is why we offer the Money Back Guarantee -- to give you plenty of time to see if it works for you.</p><p>Although everyone responds differently, many people see results with their first dose. But we recommend trying it for 2 weeks to give it a full chance of working.</p></div><div class="cxl_faq_q">My Blood Test Says My Magnesium Levels Are Normal -- But I Still Have Cramps!<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>The blood test that you received is called a SERUM test, which is part of any normal blood chemistry panel. Unfortunately, this blood test does not accurately portray your body\'s supplies of magnesium. Here\'s why: in order for your heart to beat, your body has to maintain a steady amount of magnesium in your blood at all times. It does this by pulling magnesium from your bones and tissues as needed -- including your muscles. So, you can have a perfectly normal serum test and still be low in magnesium in your muscles -- causing your cramps.</p></div><div class="cxl_faq_q">OK, So How Much Would I Have to Take Per Day?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Take the smallest dose that works for you. It absorbs best when you take it with food. Experiment to see what dose works best for you. Below is the size of the capsule compared to a dime. You can also open up the capsules and mix the powder with a food like applesauce or yogurt -- the powder has no flavor.</p></div><div class="cxl_faq_q">Why Hasn\'t My Doctor Told Me About Magnesium?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Many doctors know that magnesium is important, but they don\'t realize how important. Even then, they rarely know which magnesium forms actually work. Many doctors believe that magnesium is just another medication which decreases muscle cramps. In reality, lack of magnesium is the hidden reason WHY most people get muscle cramps.</p></div><div class="cxl_faq_q">Aren\'t There Lots of Magnesium Products? What\'s the Difference Between Them?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>There are a variety of forms and each has pros and cons:</p><ul><li>Magnesium oxide and hydroxide: Supplement companies love this stuff because it is cheap to produce. Unfortunately it is very poorly absorbed (only 8%), and is highly laxative. But nonetheless, it is what you find in most common multi-vitamins. It also happens to be the active ingredient in Milk of Magnesia.</li><li>Magnesium citrate: It is well absorbed, but is also highly laxative. It is the main ingredient in those glass bottles of laxative at the drug store.  If you have ever had a colonoscopy, this is what they gave you to "clean you out".</li><li>Magnesium sulfate: Also known as Epsom Salt.  It is also very laxative -- that\'s partly what they sell it for.  But it is great for soaking!</li><li>Magnesium glycinate: This is magnesium bound to the amino acid glycine. This form is not ideal because it tends to be expensive and only found in large, difficult to swallow tablets.</li><li>Magnesium chelate or glutamate:This product is low quality, because it has large amounts of "unbound magnesium" in the form of oxides. This poor form of magnesium causes laxative effects.</li><li>Magnesium chloride: This turns to liquid when exposed to air, making it difficult to deliver via capsule. It is not naturally found in food.</li><li>Magnesium taurinate:  This is magnesium bound to the amino acid Taurine. It has the side effect of causing extreme drowsiness, which makes it difficult to take during the day. It is also very expensive.</li><li>Cramp Defense®: High absorbing, non laxative, no weird side effects. It\'s an organic form found in fruits and vegetables, not some crushed up rock.</li></ul></div><div class="cxl_faq_q">Is It Safe? Can I Take it With My Medication/Medical Condition?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Although it is only magnesium, a natural part of a healthy diet, please talk to your doctor before starting any new dietary supplement. Certain conditions and medications can affect how the body processes and excretes magnesium. We are not allowed to give medical advice. Talk to your doctor or pharmacist!</p></div><div class="cxl_faq_q">Where is it Manufactured?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>Other companies manufacture their products all over the world with the lowest bidder. We make Cramp Defense® in the USA (both the raw ingredients and the finished product -- nothing in our product is made overseas), in a multi-million dollar, 80,000 square foot facility. This facility is inspected by the FDA. Furthermore, we have voluntarily adopted a standard even higher than FDA inspection requirements. This means we require the strictest levels of purity, precision and sanitation.</p></div><div class="cxl_faq_q">Who Are You? Where Can I Buy It? Is This One of Those Monthly Subscriptions?<div class="cxl_plusminus">+</div></div><div class="cxl_faq_a"><p>We are MgBright LLC, and we only specialize in this product. We started in January 2011, and after a period of research and development, began selling the product in February 2012. Our team and warehouse is based in Texas. The company is a member of the Better Business Bureau. If you ever need to reach us, please email us at support@crampdefense.com . For more information about the company, visit About Us.</p><p>It is only available through our secure website. It is NOT sold in stores.</p><p>We do not sell monthly subscriptions. If you buy Cramp Defense®, you will only be charged once. We do not keep your payment info on file. </p></div></div>');
	
	$('body').on('click', '.cxl_tab_container.cxl_second .cxl_tab_header', function(){
		var element_nr = $('.cxl_tab_container.cxl_second div').index(this) - 2;//2-3 -> 0-1 -> left-right
		
		if( element_nr == 0 ){
			$('.cxl_tab_container.cxl_second div').removeClass('active');
			$('.cxl_tab_container.cxl_second div:even()').addClass('active');
		}
		else if( element_nr == 1 ){
			$('.cxl_tab_container.cxl_second div').removeClass('active');
			$('.cxl_tab_container.cxl_second div:odd()').addClass('active');
		}
	});
	
	//plusminus
	$('.cxl_faq_a').first().show();
	$('.cxl_plusminus').first().text('-');
	$('body').on('click', '.cxl_tab_container.cxl_second .cxl_faq_q', function(){
		console.log( $(this).text() );
		
		$('.cxl_faq_a').hide();
		if( $(this).find('.cxl_plusminus').text() == '-' ){
			$(this).find('.cxl_plusminus').text('+');
			$(this).find('.cxl_plusminus').parent().next().hide();
		}
		else{
			$('.cxl_plusminus').text('+');
			$(this).find('.cxl_plusminus').text('-');
			$(this).find('.cxl_plusminus').parent().next().show();
		}
	});
	
		//slider
	    $(".cxl_slider").slick({
	      // normal options...
	      infinite: true,
	      dots: false,
	      autoplay: false,
	      slidesToShow: 2,
	      slidesToScroll: 2,
	      autoplaySpeed: 8000,
	      speed: 1000,
	      // the magic
	      responsive: [{
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 3,
	          infinite: true
	        }
	      }, {
	        breakpoint: 600,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          dots: true
	        }
	      }, {
	        breakpoint: 300,
	        settings: "unslick" // destroys slick
	      }]
	    });

	//remove
	$('.rte').remove();
	$('#shopify-product-reviews').prev().remove();
	$('#shopify-product-reviews').remove();
	//$('.content-testimonials-wrapper').remove();
});
