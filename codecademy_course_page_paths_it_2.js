( function() {
  
  //delay for execution
  
  window.safeWaitUntilExists = function( selector, callback ) {
        if ( "undefined" === typeof selector || "undefined" === typeof callback ) {
            return;
        }

        window.safeWaitTimeoutID = window.setTimeout( function() {
            if ( document.querySelectorAll( selector ).length ) {
             callback(); // exit here
            }
            else {

              window.safeWaitUntilExists( selector, callback ); // repeat search
            }
        }, 25 );
    
    };
    
   function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method); }, 50);
    }
	}
    
  cxlLearnPythonTest={
    
    tab1:'',
    tab2:'',
    tab3:'',
    link1:'',
    link2:'',
    link3:'',
    
    source1:'',
    source2:'',
    source3:'',
    source4:'',
    
    checkCopy:function(){
		var that=this;
		setTimeout(function(){
				var path=window.location.pathname;
				if(path.indexOf('learn-python')>-1 || path.indexOf('learn-css')>-1 || path.indexOf('learn-python-3')>-1 || path.indexOf('introduction-to-javascript')>-1 || path.indexOf('learn-sql')>-1 ){
				if(!document.querySelector('.cxl-container')){
					that.setHTML();
					
				}else{
					that.checkCopy();
				}
				}
		},50);
	},
	
    getHTML:function(url, callback){
		if ( !window.XMLHttpRequest ) return
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			if ( callback && typeof( callback ) === 'function' ) {
				callback( this.responseXML );
			}
		}
		xhr.open( 'GET', url );
		xhr.responseType = 'document';
		xhr.send();
    },
    
    getSources:function(path){
    	this.source1_html = document.createElement('div');
    	this.source2_html = document.createElement('div');
    	this.source3_html = document.createElement('div');
    	this.source4_html = document.createElement('div');
    	
    	if(path.indexOf('/learn-python')>-1){
    		this.source1_html.innerHTML = '<a href="/learn/paths/computer-science" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-computer-science"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL computerScienceBg__noJfY4uDvpVZLKCnoGd_k"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b5001a11d176d7acd8b2bf8.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Computer Science</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Looking for an introduction to the theory behind programming? Master Python while learning data structures, algorithms, and more!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Python</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Data Structures</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Command Line</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Git</span></li></ul></div></div></a>';
    		this.source2_html.innerHTML = '<a href="/learn/paths/data-science" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-data-science"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL dataScienceBg__2trcyG4bimH64kpV9fa8l6"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b520caa1d176d21f5a65a61.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Data Science</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Learn SQL and Python and build the skills you need to query, analyze, and visualize data.</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Python</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>SQL</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Data Visualization</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Machine Learning</span></li></ul></div></div></a>';
    		this.source3_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-machine-learning" href="/learn/paths/machine-learning" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ machineLearningTheme__1gHzPAGQmSwsITSJ6-0VNo full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cab64c55f1de8039db366ef.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Get Started with Machine Learning</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn the fundamentals of machine learning and apply those concepts to real world data!">Learn the fundamentals of machine learning and apply those concepts to real world data!</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">7 weeks</span></span></div></div></div></a>';
    		this.source4_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-analyze-data-with-python" href="/learn/paths/analyze-data-with-python" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ dataAnalysisTheme__FSDEM_P0pqiXFGVnGS-xH full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cacbe7b3709024753e7c3ff.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Analyze Data with Python</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn how to analyze and visualize data using Python.">Learn how to analyze and visualize data using Python.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">10 weeks</span></span></div></div></div></a>';
    	}
    	if(path.indexOf('/introduction-to-javascript')>-1){
    		this.source1_html.innerHTML = '<a href="/learn/paths/web-development" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-web-development"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL webDevBg__3kMAqdJXvD16sWrCf5To4k"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b32457b646caa5007c30975.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Web Development</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Master the languages of the web: HTML, CSS, JavaScript, and SQL. This path is great for budding front-end or back-end engineers!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>HTML</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>CSS</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>JavaScript</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>React</span></li></ul></div></div></a>';
    		this.source2_html.innerHTML = '<a href="/learn/paths/code-foundations" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-code-foundations"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL codeFoundationsBg__3yHuSFNJ8MMXSGl5D26aHm"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b55e668646caa552f8e4d1d.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Code Foundations</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Interested in learning how to code, but unsure where to start? This is the path for you!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Computer Science History</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Career Exploration</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Applications</span></li></ul></div></div></a>';
    		this.source3_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-create-a-back-end-app-with-javascript" href="/learn/paths/create-a-back-end-app-with-javascript" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ jsBackendTheme__2j9Ywyq6xFM54BLUb6P8OF full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cb678013709022f5b908913.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Create a Back-End App with JavaScript</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn how to build back-end web APIs using Express.js, Node.js, SQL, and a Node.js-SQLite database library.">Learn how to build back-end web APIs using Express.js, Node.js, SQL, and a Node.js-SQLite database library.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">8 weeks</span></span></div></div></div></a>';
    		this.source4_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-build-web-apps-with-react" href="/learn/paths/build-web-apps-with-react" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ bwaTheme__18QFW92cccF77EOu42qhSp full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5c9ce0b45f1de879ebcad4fd.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Create a Front-End App with React</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn to build front-end web apps with JavaScript and React.">Learn to build front-end web apps with JavaScript and React.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">8 weeks</span></span></div></div></div></a>';
    	}
    	if(path.indexOf('/learn-sql')>-1){
    		this.source1_html.innerHTML = '<a href="/learn/paths/data-science" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-data-science"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL dataScienceBg__2trcyG4bimH64kpV9fa8l6"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b520caa1d176d21f5a65a61.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Data Science</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Learn SQL and Python and build the skills you need to query, analyze, and visualize data.</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Python</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>SQL</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Data Visualization</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Machine Learning</span></li></ul></div></div></a>';
    		this.source2_html.innerHTML = '<a href="/learn/paths/web-development" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-web-development"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL webDevBg__3kMAqdJXvD16sWrCf5To4k"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b32457b646caa5007c30975.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Web Development</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Master the languages of the web: HTML, CSS, JavaScript, and SQL. This path is great for budding front-end or back-end engineers!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>HTML</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>CSS</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>JavaScript</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>React</span></li></ul></div></div></a>';
    		this.source3_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-analyze-data-with-sql" href="/learn/paths/analyze-data-with-sql" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ sqlTheme__3dEgviGBXSKJx0mghUVnOo full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cafb2d937090210d7df3652.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Analyze Data with SQL</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Master SQL queries and work with multiple datasets so you can analyze your business data and level up your career.">Master SQL queries and work with multiple datasets so you can analyze your business data and level up your career.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">6 weeks</span></span></div></div></div></a>';
    		this.source4_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-create-a-back-end-app-with-javascript" href="/learn/paths/create-a-back-end-app-with-javascript" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ jsBackendTheme__2j9Ywyq6xFM54BLUb6P8OF full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cb678013709022f5b908913.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Create a Back-End App with JavaScript</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn how to build back-end web APIs using Express.js, Node.js, SQL, and a Node.js-SQLite database library.">Learn how to build back-end web APIs using Express.js, Node.js, SQL, and a Node.js-SQLite database library.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">8 weeks</span></span></div></div></div></a>';
    	}
    	if(path.indexOf('/learn-css')>-1){
    		this.source1_html.innerHTML = '<a href="/learn/paths/web-development" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-web-development"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL webDevBg__3kMAqdJXvD16sWrCf5To4k"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b32457b646caa5007c30975.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Web Development</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Master the languages of the web: HTML, CSS, JavaScript, and SQL. This path is great for budding front-end or back-end engineers!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>HTML</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>CSS</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>JavaScript</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>React</span></li></ul></div></div></a>';
    		this.source2_html.innerHTML = '<a href="/learn/paths/code-foundations" class="link__1nJCW3jTDnGFIhgBwLJOmu" data-testid="path-catalog-card-code-foundations"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi card__1rLe57v0D0AEDKA36Uol6"><div class="image__2gTJV9TWBxGGWGoFTKyEBL codeFoundationsBg__3yHuSFNJ8MMXSGl5D26aHm"><img alt="" src="https://cdn.codecademy.com/assets/components/cards/path-card/5b55e668646caa552f8e4d1d.svg"></div><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 class="title__3-j3koUKgKGDIZ9htQFhDj">Code Foundations</h3><p class="description__1fsz0Ce9zlMIQ87ho_RN50">Interested in learning how to code, but unsure where to start? This is the path for you!</p><ul class="skills__1PQxdUFExyEeNmc82SYiBJ"><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Computer Science History</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Career Exploration</span></li><li class="skill__1UvQgk1BuhKSTs8-m_nWDT"><svg class="icon__1Re5bP74eq6JCFamk3ypmZ" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Checkmark Icon</title><path d="m18 2-12 12-5.5-5.5 1.41-1.41 4.09 4.08 10.59-10.58z" transform="translate(3 5)"></path></svg><span>Applications</span></li></ul></div></div></a>';
    		this.source3_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-learn-how-to-build-websites" href="/learn/paths/learn-how-to-build-websites" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ buildWebsitesTheme__2A6YFSXwO0SLKqqvQ9Ka5t full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5cadfefe5f1de806e9704577.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Learn How to Build Websites</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn the basics of web development to build your own website.">Learn the basics of web development to build your own website.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">10 weeks</span></span></div></div></div></a>';
    		this.source4_html.innerHTML = '<a class="noUnderline__3auQH9YTaYeT71hkb5qMQq noLinkStyle__-w6t73hD01xYisbNR9fsS" data-testid="path-card-build-web-apps-with-react" href="/learn/paths/build-web-apps-with-react" event="click"><div class="shell__26O4Vpaj5CqZxaoVpy-Xfe hoverShadow__IVW-wHwxmEL-Phbmh2ggi pathCard__Mm1ON8491JLL6mwJuW5bZ bwaTheme__18QFW92cccF77EOu42qhSp full__1hqg-ZEx1Yh2_jEymhkxFo"><div class="cardUpper__vzZvESgrIp7Za5HCYWNYZ"><div class="titleArea__2-EEoBg8tssXAHxoPTZM8n"></div><div class="pathImageWrapper__ZV-Dtl_FkWbEPBPVfSAWU"><img class="pathImage__3BOZlzpUjupF4Ng5oYNV6Q" src="https://cdn.codecademy.com/assets/components/cards/path-card/5c9ce0b45f1de879ebcad4fd.svg" alt=""></div></div><div class="cardLower__31XFyhcguoxDo_6IfZKz02"><div class="standardPadding__30wLYlJfQ9r13CTC5oY8t-"><h3 aria-level="2" class="header__dZgqyr9p7zUaFIBL72Yhb">Create a Front-End App with React</h3><span class="description__3MJt5iQRE_CCMQkKW06QqY" title="Learn to build front-end web apps with JavaScript and React.">Learn to build front-end web apps with JavaScript and React.</span></div><div class="footer__1phZ43pgE2JucscNS6l2I4 flex__1sy0quz7rVG-fWrD8ey5Zu transparentTopBorder__3o3IbnZg1wJd1HtPphKT2V leftAlign__3zgUY68KPFnftNRWJJWyEO standardPadding__4YILY1qrs1srITIKCIhXw footer__ARjLUxHr1VzB5nZXwvIhO"><span><svg aria-label="Time to complete" name="clock" class="icon__2Rv6jTIzEnf5tzPbbjSS6Y" height="16" width="16" fill="currentColor" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Clock Icon</title><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-18a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10-5.53 0-10-4.5-10-10C2 6.477 6.477 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"></path></svg><span class="timeEstimate__1cS03rKQz8g3uiNUYi4Tn7">8 weeks</span></span></div></div></div></a>';
    	}
    },
	 
	addLearnButtons:function(){
		
    	document.querySelectorAll('a[data-testid*="path-catalog"]>div[class*="shell"]>div[class*="standardPadding"]').forEach(function(el,i){
    		var learnButton=document.createElement('span');
			learnButton.setAttribute('class','cxl-learn-button');
			learnButton.innerHTML='Learn more';
    		el.append(learnButton);
    	})
    },
    
    hideContainer:function(){
      this.link1.classList.remove('cxl-link-passive');
      this.link2.classList.remove('cxl-link-passive');
      this.link3.classList.remove('cxl-tab-active');
      this.tab3.style.display="none";
    },
    
    showContainer:function(){
      this.link1.classList.add('cxl-link-passive');
      this.link2.classList.add('cxl-link-passive');
      if(!this.link3.classList.contains('cxl-tab-active')){
        this.link3.classList.add('cxl-tab-active');
      }
      this.tab1.style.display="none";
      this.tab2.style.display="none";
      this.tab3.style.display="block";
    },
    
    storeTags:function(){
      this.tab1=document.querySelector('[role=tabpanel]:nth-of-type(3)');
      this.tab2=document.querySelector('[role=tabpanel]:nth-of-type(4)');
      this.tab3=document.querySelector('[role=tabpanel]:nth-of-type(2)');//AKA: .cxl-container
      this.link1=document.querySelector('[class^=tabList__] > div:nth-of-type(1) > a');
      this.link2=document.querySelector('[class^=tabList__] > div:nth-of-type(2) > a');
      this.link3=document.querySelector('[class^=tabList__] > div:nth-of-type(3) > a');//AKA: .cxl-tab-a
    },
    
    newTab:function(){
      var newTab=document.createElement('div');
      newTab.setAttribute('class', 'cxl-tab');
      newTab.innerHTML='<a style="cursor: pointer" id="05323551229426169-2" class="cxl-tab-a">Related Paths</a>';
      return newTab;
    },
    
    divider:function(){
    	var divider=document.createElement('div');
    	divider.setAttribute('class', 'cxl-divider');
    	divider.innerHTML='<div class="cxl-separator"></div><div class="cxl-textContainer"><h2 class="cxl-title">Skill Paths</h2><p class="cxl-description">Skill Paths provide a short roadmap to help you master a new job-ready skill.</p></div>';
    	return divider;
    },
    
    pathContainer:function(){
    	var pathContainer=document.createElement('ul');
    	pathContainer.setAttribute('class', 'cxl-pathcontainer');
    	return pathContainer;
    },
    
    newPage:function(){
      var newPage=document.createElement("div");
      newPage.setAttribute('class','cxl-container');
      newPage.setAttribute('role','tabpanel');
      newPage.innerHTML='<h2 class="cxl-title">CAREER PATHS<a href="/pro/membership"><a aria-label="PRO" href="/pro/membership"><svg height="30" class="cxl-logo logo__e8M1cFSWTIdSGCXrbQtVp logoProAlt__3SRa6insFXIeH4BZEbiWLs" viewBox="0 0 95 40" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="m0 0h74v40h-74zm78 34h17v6h-17z" fill="currentColor"></path><path d="m13.971 23.67v6.82h-3.971v-20.145h6.82c4.749 0 7.253 2.965 7.253 6.62 0 3.625-2.504 6.705-7.253 6.705zm2.245-9.871h-2.245v6.446h2.245c2.187 0 3.77-1.036 3.77-3.28 0-2.245-1.583-3.166-3.77-3.166zm21.518 16.691-4.46-7.741h-2.821v7.741h-4v-20.145h7.568c4.404 0 6.994 2.62 6.994 6.13 0 1.9-.777 4.317-3.828 5.526l5.151 8.49h-4.604zm-.72-13.986c0-1.784-1.295-2.705-3.51-2.705h-3.051v5.468h3.05c2.216 0 3.511-1.036 3.511-2.763zm16.453-6.504c5.843 0 10.533 4.346 10.533 10.418s-4.69 10.417-10.533 10.417c-5.842 0-10.533-4.345-10.533-10.417s4.691-10.418 10.533-10.418zm0 17.152c3.799 0 6.36-2.878 6.36-6.734 0-3.857-2.561-6.734-6.36-6.734s-6.36 2.877-6.36 6.734c0 3.856 2.561 6.734 6.36 6.734z" fill="#fff"></path></g></svg></a></h2>'+
        '<p class="cxl-subtitle">Career paths guide you through exactly what you need to learn to build a solid foundation for a career in tech.</p>';
      return newPage;
    },
    
    setHTML:function(){
      var that=this;
      
    	
    	var path=window.location.pathname;
    	
		that.getSources(path);
        var newTab=that.newTab();
        var newPage=that.newPage();
        var divider=that.divider();
        var pathContainer=that.pathContainer();
        var parent=document.querySelector('div[class^="tabList_"]').appendChild(newTab);
        var parent2=document.querySelector('div[class^="tabList_"]').insertAdjacentElement('afterend', newPage);

		//static data
    	document.querySelector('.cxl-container').append(that.source1_html);
    	document.querySelector('.cxl-container').append(that.source2_html);
    	document.querySelector('.cxl-container').append(divider);
    	document.querySelector('.cxl-container').append(pathContainer);
    	document.querySelector('.cxl-pathcontainer').append(that.source3_html);
	   	document.querySelector('.cxl-pathcontainer').append(that.source4_html);

        that.storeTags();
        that.link1.addEventListener('click', function(){
          that.hideContainer();
          that.tab1.style.display="block";
        });
        that.link2.addEventListener('click', function(){
          that.hideContainer();
          that.tab2.style.display="block";
        });
        that.link3.addEventListener('click', function(){
          that.tab3.style.display="block";
          that.showContainer();
        });
		that.checkCopy();
    },
    
    run:function(){
    var that=this;
    safeWaitUntilExists('div[class^="tabList_"]', function(){
      that.checkCopy();
    });
      
    }
  }
  
  cxlLearnPythonTest.run();

})();

