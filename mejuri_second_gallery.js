String.prototype.toHtmlEntities = function() {
    return this.replace(/./gm, function(s) {
        return "&#" + s.charCodeAt(0) + ";";
    });
};

(function($) {
	/* DESKTOP */

	var currency = window.currency;//$('#current-currency').attr('data-currency');
	console.log( currency );
	var price = [];
	price['USD'] = [];
	price['AUD'] = [];
	price['CAD'] = [];

	price['USD'][0] = '$50';
	price['USD'][1] = '$125';
	price['USD'][2] = '$285';
	price['USD'][3] = '$80';
	price['USD'][4] = '$150';
	price['USD'][5] = '$170';
	price['USD'][6] = '$80';
	price['USD'][7] = '$85';
	price['USD'][8] = '$60';
	price['USD'][9] = '$75';
	price['USD'][10] = '$95';
	price['USD'][11] = '$100';

	price['AUD'][0] = 'AU$88';
	price['AUD'][1] = 'AU$220';
	price['AUD'][2] = 'AU$495';
	price['AUD'][3] = 'AU$140';
	price['AUD'][4] = 'AU$260';
	price['AUD'][5] = 'AU$295';
	price['AUD'][6] = 'AU$140';
	price['AUD'][7] = 'AU$150';
	price['AUD'][8] = 'AU$105';
	price['AUD'][9] = 'AU$130';
	price['AUD'][10] = 'AU$165';
	price['AUD'][11] = 'AU$175';

	price['CAD'][0] = 'C$65';
	price['CAD'][1] = 'C$160';
	price['CAD'][2] = 'C$370';
	price['CAD'][3] = 'C$105';
	price['CAD'][4] = 'C$195';
	price['CAD'][5] = 'C$220';
	price['CAD'][6] = 'C$100';
	price['CAD'][7] = 'C$110';
	price['CAD'][8] = 'C$80';
	price['CAD'][9] = 'C$95';
	price['CAD'][10] = 'C$125';
	price['CAD'][11] = 'C$130';
	
	var h = 0;
	var p = 0;
	var html = [];
	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span>
		<h4>Small Hoops</h4>
		<div class='product-color__selector cxl_color_selector'>
			<dl class='size-selector'>
				<dd class='size-selector__options'>
					<div class='radio radio--is-checked' 
							cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7224/large/small-hoop.jpg);' 
							cxl_item_link='https://mejuri.com/shop/products/small-hoops' 
							cxl_item_color='14k Yellow Gold' 
							cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7879/large/small-hoops-cc.png);'>
						<label>
							<img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/006/original/gold-gold-vermeil.svg'>
						</label>
					</div>
					<div class='radio' 
							cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7057/large/Jenai_-_03.14.19_-_035.jpg);' 
							cxl_item_link='https://mejuri.com/shop/products/small-hoops-white-gold' 
							cxl_item_color='14k White Gold' 
							cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6741/large/M_earring_smallhoops.png);'>
						<label>
							<img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/008/original/silver-white-gold.svg'>
						</label>
					</div>
				</dd>
			</dl>
		</div>
		<p class='cxl_item_color'>14k Yellow Gold</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Spiral Earrings</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7071/large/Jaeda_-_03.18.19_-_026.jpg);' cxl_item_link='https://mejuri.com/shop/products/spiral-earrings' cxl_item_color='14k Yellow Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9869/large/p52505557_Spiral_Earring_YG_both.png);'><label><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/006/original/gold-gold-vermeil.svg'></label></div><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7075/large/Ayan_-_03.15.19_-_153.jpg);' cxl_item_link='https://mejuri.com/shop/products/spiral-earrings-white-gold' cxl_item_color='14k White Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9870/large/p52704297_Spiral_Earring_WG_both.png);'><label><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/008/original/silver-white-gold.svg'></label></div></dd></dl></div><p class='cxl_item_color'>14k Yellow Gold</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Diamond Necklace</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7139/large/Wynn_-_03.14.19_-_037.jpg);' cxl_item_link='https://mejuri.com/shop/products/black-diamond-necklace' cxl_item_color='14k Yellow Gold, Black Diamond' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9634/large/p000491_Black_Diamond_Necklace_YG_Front.png);'><label><input type='radio' value='559'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/022/original/gold-black-diamond.svg'></label></div><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6029/large/October_19_-_Studio-0097.jpg);' cxl_item_link='https://mejuri.com/shop/products/diamond-necklace-white-gold' cxl_item_color='14k White Gold, Diamond' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/4008/large/p52505318_Diamond_Necklace_WG_FRONT.png);'><label><input type='radio' value='874'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/036/original/silver-diamond-topaz-sapphire.svg'></label></div><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7143/large/Ayan_-_03.15.19_-_181.jpg);' cxl_item_link='https://mejuri.com/shop/products/diamond-necklace-1' cxl_item_color='14k Yellow Gold, Diamond' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7930/large/p000490_Diamond_Necklace_YG_FRONT.png);'><label><input type='radio' value='558'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/011/original/gold-diamond-topaz-sapphire.svg'></label></div></dd></dl></div><p class='cxl_item_color'>14k Yellow Gold, Diamond</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Lotus Necklace</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6837/large/Feb_21__2019_-_Studio_Session_-_Brianna-0028.jpg);' cxl_item_link='https://mejuri.com/shop/products/lotus-necklace-silver' cxl_item_color='Sterling Silver, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9704/large/p52704798_Lotus_Necklace_SS_FRONT.png);'><label><input type='radio' value='1520'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/035/original/silver-diamond-topaz-sapphire.svg'></label></div><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7133/large/Wynn_-_03.14.19_-_021.jpg);' cxl_item_link='https://mejuri.com/shop/products/lotus-necklace' cxl_item_color='Gold Vermeil, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8291/large/p052454_Lotus_Necklace_YG_FRONT.png);'><label><input type='radio' value='629'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/013/original/Vermeil_Diamond.svg'></label></div></dd></dl></div><p class='cxl_item_color'>Gold Vermeil, White Sapphire</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span>
			<h4>Jewelry Box</h4>
			<div class='product-color__selector cxl_color_selector'>
				<dl class='size-selector'>
					<dd class='size-selector__options'>
						<div class='radio radio--is-checked' 
							cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8208/large/p52705058_JewelryBoxBeige_openfull.png);' 
							cxl_item_link='https://mejuri.com/shop/products/jewelry-box-beige' 
							cxl_item_color='Beige Grain Leather' 
							cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8206/large/p52705058_JewelryBoxBeige_topclosed.png);'>
							<label>
								<input type='radio' value='1226'>
									<img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/075/original/nude.svg'>
							</label>
							</div>
							<div class='radio' 
								cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8211/large/JewelryBox_Black_open_full.png);' 
								cxl_item_link='https://mejuri.com/shop/products/jewelry-box-black' 
								cxl_item_color='Black Grain Leather' 
								cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8209/large/JewelryBox_Black_closed.png);'>
							<label>
								<input type='radio' value='1501'>
									<img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/074/original/Untitled-3.svg'>
							</label>
						</div>
					</dd>
				</dl>
			</div>
			<p class='cxl_item_color'>Beige Grain Leather</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Mini Lotus Bracelet</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/5149/large/MiniLotus_Bracelet_Model_PP_1.jpg);' cxl_item_link='https://mejuri.com/shop/products/mini-lotus-bracelet' cxl_item_color='14k Yellow Gold, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7705/large/mini-lotus-bracelet-cc_v2.png);'><label><input type='radio' value='1190'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/015/original/gold-diamond-topaz-sapphire.svg'></label></div><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6855/large/Feb_21__2019_-_Studio_Session_-_Brianna-0185.jpg);' cxl_item_link='https://mejuri.com/shop/products/mini-lotus-bracelet-silver' cxl_item_color='Sterling Silver, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9790/large/p52704792_Mini_Lotus_Bracelet_SS_TOP.png);'><label><input type='radio' value='1514'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/035/original/silver-diamond-topaz-sapphire.svg'></label></div></dd></dl></div><p class='cxl_item_color'>14k Yellow Gold, White Sapphire</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Sagittarius Necklace Vermeil</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7330/large/Nicole_-_04.09.19-049.jpg);' cxl_item_link='https://mejuri.com/shop/products/zodiac-necklace-sagittarius' cxl_item_color='Gold Vermeil, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8397/large/zodiac-necklace-sagittarius-cc.png);'><label><input type='radio' value='845'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/013/original/Vermeil_Diamond.svg'></label></div><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7358/large/Nicole_-_04.09.19-034.jpg);' cxl_item_link='https://mejuri.com/shop/products/zodiac-necklace-sagittarius-silver' cxl_item_color='Sterling Silver, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/4110/large/M_necklace_zodiac_sagitariusS2.png);'><label><input type='radio' value='922'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/035/original/silver-diamond-topaz-sapphire.svg'></label></div></dd></dl></div><p class='cxl_item_color'>Gold Vermeil, White Sapphire</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Large Hoops</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6882/large/Feb_21__2019_-_Studio_Session_-_Brianna-0109.jpg);' cxl_item_link='https://mejuri.com/shop/products/large-hoops-white-gold' cxl_item_color='14k White Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6742/large/largehoops2_copy.png);'><label><input type='radio' value='1525'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/008/original/silver-white-gold.svg'></label></div><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7065/large/Jenai_-_03.14.19_-_025.jpg);' cxl_item_link='https://mejuri.com/shop/products/large-hoops' cxl_item_color='14k Yellow Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/7854/large/large-hoops-cc.png);'><label><input type='radio' value='959'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/006/original/gold-gold-vermeil.svg'></label></div></dd></dl></div><p class='cxl_item_color'>14k Yellow Gold</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Sapphire Hoops</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/5772/large/October_18th_-_Studio-226-2.jpg);' cxl_item_link='https://mejuri.com/shop/products/sapphire-hoops-silver' cxl_item_color='Sterling Silver, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9818/large/p5250409_Sapphire_hoops_WG_both.png);'><label><input type='radio' value='766'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/035/original/silver-diamond-topaz-sapphire.svg'></label></div><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/5770/large/October_18th_-_Studio-226.jpg);' cxl_item_link='https://mejuri.com/shop/products/sapphire-hoops' cxl_item_color='Gold Vermeil, White Sapphire' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/10059/large/p5250409_Sapphire_hoops_YG_both-v4.png);'><label><input type='radio' value='765'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/013/original/Vermeil_Diamond.svg'></label></div></dd></dl></div><p class='cxl_item_color'>Gold Vermeil, White Sapphire</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Stacker Rings</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/4795/large/October_19_-_Studio-0048_copy.jpg);' cxl_item_link='https://mejuri.com/shop/products/stacker-ring' cxl_item_color='14k Yellow Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/10011/large/p052649_Stacker_Ring_YG_Front-V2.png);'><label><input type='radio' value='727'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/006/original/gold-gold-vermeil.svg'></label></div><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/3133/large/October_22_-_Studio_-_0236.jpg);' cxl_item_link='https://mejuri.com/shop/products/stacker-ring-white-gold' cxl_item_color='14k White Gold' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9587/large/p052661_Stacker_Ring_WG_Front.png);'><label><input type='radio' value='729'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/008/original/silver-white-gold.svg'></label></div></dd></dl></div><p class='cxl_item_color'>14k Yellow Gold</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Dôme Bracelet</h4><div class='product-color__selector cxl_color_selector'><dl class='size-selector'><dd class='size-selector__options'><div class='radio' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/6853/large/Feb_21__2019_-_Studio_Session_-_Brianna-0196.jpg);' cxl_item_link='https://mejuri.com/shop/products/dome-bracelet-silver' cxl_item_color='Sterling Silver' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/10040/large/Silver_Dome_Bracelet-Open.png);'><label><input type='radio' value='1513'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/007/original/silver-white-gold.svg'></label></div><div class='radio radio--is-checked' cxl_hover_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/8883/large/October_19_-_Studio-0128_copy.jpg);' cxl_item_link='https://mejuri.com/shop/products/dome-bracelet' cxl_item_color='Gold Vermeil' cxl_image_style='background-image: url(https://dto508s2j2p46.cloudfront.net/system/spree/products/9797/large/Dome_Bracelet-Front.png);'><label><input type='radio' value='986'><img class='material-category__icon' src='https://dto508s2j2p46.cloudfront.net/system/material_categories/icons/000/000/005/original/Vermeil.svg'></label></div></dd></dl></div><p class='cxl_item_color'>Gold Vermeil</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	html[h++] = 
		`<span class='cxl_item_price'>` + price[currency][p++] + `</span><h4>Locket Necklace</h4><p class='cxl_item_color' style='margin-left: 0;'>Gold Vermeil</p>
		`.replace(/(\r\n|\n|\r|\t)/g, '');

	//event listener
	$('body').on('click', '.cxl_color_selector .radio', function(e){
		e.preventDefault();

		//remove circle indicator
		$(this).parent().find('.radio').removeClass('radio--is-checked');
		//add circle indicator
		$(this).addClass('radio--is-checked');
		
		//change image
		var image = $(this).parents('.horizontal-gallery-item').first().find('.hh-gallery__pic.hh-gallery__pic--linked');
		var new_image_style = $(this).attr('cxl_image_style');
		image.attr('style', new_image_style);
		
		//change item color text
		var item_color = $(this).parents('.horizontal-gallery-item').first().find('.cxl_item_color');
		var new_item_text = $(this).attr('cxl_item_color');
		item_color.text(new_item_text);
		
		//change item link top & bottom
		var item_link = $(this).parents('.horizontal-gallery-item').first().find('.hh-gallery__pic.hh-gallery__pic--linked');
		var item_link2 = $(this).parents('.horizontal-gallery-item').first().find('.hh-gallery__details');
		var new_item_link = $(this).attr('cxl_item_link');
		item_link.attr('href', new_item_link);
		item_link2.attr('href', new_item_link);
	});
	
	//hover
	$('body').on('mouseenter', '.cxl .hh-gallery__pic.hh-gallery__pic--linked', function(){
		var image = $(this).parents('.horizontal-gallery-item').first().find('.hh-gallery__pic.hh-gallery__pic--linked');
		var new_image_style = $(this).parents('.horizontal-gallery-item').first().find('.cxl_color_selector .radio.radio--is-checked').attr('cxl_hover_style');
		image.attr('style', new_image_style);
	});
	$('body').on('mouseleave', '.cxl .hh-gallery__pic.hh-gallery__pic--linked', function(){
		var image = $(this).parents('.horizontal-gallery-item').first().find('.hh-gallery__pic.hh-gallery__pic--linked');
		var new_image_style = $(this).parents('.horizontal-gallery-item').first().find('.cxl_color_selector .radio.radio--is-checked').attr('cxl_image_style');
		image.attr('style', new_image_style);
	});

	
	h = 0;
	var data = `{
				  "title": "Most Gifted",
				  "subtitle": "Shop by category",
				  "link": {
				    "text": "shop gifts",
				    "href": "/info/giftguide"
				  },
				  "data": [
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/7879/large/small-hoops-cc.png",
				      "link": "/shop/products/small-hoops",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/9869/large/p52505557_Spiral_Earring_YG_both.png",
				      "link": "/shop/products/spiral-earrings",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/7930/large/p000490_Diamond_Necklace_YG_FRONT.png",
				      "link": "/shop/products/diamond-necklace-1",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/8291/large/p052454_Lotus_Necklace_YG_FRONT.png",
				      "link": "/shop/products/lotus-necklace",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/10048/large/p52506296_TravelCase_closed.png",
				      "link": "/shop/products/travel-case-beige",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/7705/large/mini-lotus-bracelet-cc_v2.png",
				      "link": "/shop/products/mini-lotus-bracelet",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/8397/large/zodiac-necklace-sagittarius-cc.png",
				      "link": "/shop/products/zodiac-necklace-sagittarius",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/7854/large/large-hoops-cc.png",
				      "link": "/shop/products/large-hoops",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/10059/large/p5250409_Sapphire_hoops_YG_both-v4.png",
				      "link": "/shop/products/sapphire-hoops",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/10011/large/p052649_Stacker_Ring_YG_Front-V2.png",
				      "link": "/shop/products/stacker-ring",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/9797/large/Dome_Bracelet-Front.png",
				      "link": "/shop/products/dome-bracelet",
				      "details": "` + html[h++] + `"
				    },
				    {
				      "image": "https://dto508s2j2p46.cloudfront.net/system/spree/products/8336/large/p52506124_Locket_Necklace_YG_Front.png",
				      "link": "/shop/products/locket-necklace",
				      "details": "` + html[h++] + `"
				    }
				  ]
				}`;

	$('#start-browsing').after(
		`<div class="homepage__element homepage__element--indented homepage__element--indented-mobile cxl" id="start-browsing-gift">
        	<div data-react-class="HomepageHorizontalGallery" data-react-props="` + data.toHtmlEntities() + `">
        	
	        	<div data-reactroot="" class="horizontal-gallery horizontal-gallery--at-start hh-gallery" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
		        	<div class="horizontal-gallery__header">
		        		<div class="horizontal-gallery__headings">
		        			<div class="horizontal-gallery__title">Start browsing</div>
		        		</div>
		        	
		        		<a class="horizontal-gallery__link" href="/info/giftguide">shop gift</a>
		        	
			        	<div class="horizontal-gallery__nav">
			        		<a href="#" class="horizontal-gallery__arrow horizontal-gallery__arrow--prev horizontal-gallery__arrow--disabled"></a>
			        		<a href="#" class="horizontal-gallery__arrow horizontal-gallery__arrow--next"></a>
			        	</div>
			        </div>

		        </div>
			</div>
		</div>
      </div>
	`);
	

	/* react - create second gallery */
	//console.log( ReactDOM );

	var e = JSON.parse(data),
	    t = e.title,
	    n = e.link,
	    r = e.data,
	    i = e.squaredStyle;
	//console.log( t );
	//console.log( e );
	
	var o = r.map(function(e, t) {
	    var n = UIHelper.classnames("hh-gallery__pic", {
	        "hh-gallery__pic--linked": !!e.link,
	        "hh-gallery__pic--squared": !!i
	    });
	    return React.createElement(HorizontalGalleryItem, {
	        key: t
	    }, React.createElement("a", {
	        href: e.link,
	        className: n,
	        style: {
	            backgroundImage: "url(" + e.image + ")"
	        }
	    }), React.createElement("a", {
	        href: e.link,
	        className: "hh-gallery__details"
	    }, e.details && React.createElement("div", {
	        dangerouslySetInnerHTML: {
	            __html: e.details
	        }
	    })));
	});
	                
	ReactDOM.render(
		React.createElement(HorizontalGallery, {
	                    elements: 4,
	                    className: "hh-gallery",
	                    title: t,
	                    link: n
	                }, o),
		document.getElementById('start-browsing-gift')
	);
	
	
	/* OVERRIDE NEEDED: wait until rendered then add padding: 3px !important; */
	var content_is_there = setInterval(function() {
		if( $('.cxl .material-category__icon').length > -1 ){
			clearInterval(content_is_there);
			$('.cxl_color_selector .radio label').attr('style', 'padding: 3px !important');
		}
	}, 250);

	
})(jQuery);
