/*!
 * jstext
 */
 
//text2
Array.prototype.unique2 = function()
{var n = {},r=[]; //ntexthashtext, rtext
	for(var i = 0; i < this.length; i++) //text
	{if (!n[this[i]]) //texthashtextmiddletext
		{n[this[i]] = true; //texthashtext
			r.push(this[i]); //textpushtext}}
	return r;}
//text4 (withsort) 
Array.prototype.unique4 = function()
{this.sort();
	var re=[this[0]];
	for(var i = 1; i < this.length; i++)
	{if(this[i]!== re[re.length-1])
		{re.push(this[i]);}}
	return re;}

/////////////////////////////////////////////////////////


 // textsort 
Array.prototype.bubbleSort = function(){var i = 0, len = this.length, 
	 j, d; 
	for(; i<len; i++){for(j=0; j<len; j++){if(this[i] < this[j]){d = this[j]; 
			 this[j] = this[i]; 
			 this[i] = d;}}}}
	 
	 // textsort(lq.2016-4-13)
	 // text: [text, text]
	 //text: textmiddletextsort, textobject
Array.prototype.bubbleSort_Array = function(){var i = 0, len = this.length, j, d, a1,a2,v1,v2; 
	for(; i<len; i++){for(j=0; j<len; j++){a1 = this[i];
			a2 = this[j];
			v1 = a1[1];
			v2 = a2[1];
			if(v1 < v2){d = this[j]; 
				this[j] = this[i]; 
				this[i] = d;}}}}
 
 

/*textpoint text (jquerytext) */
var exchange = function(a,b){var n = a.next(), p = b.prev();
	b.insertBefore(n);
	a.insertAfter(p);}; 