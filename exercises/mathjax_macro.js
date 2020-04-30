window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};

function wrt (pstring) {
	document.write(pstring);
}
/******* macros *******/
wrt("$");
wrt("\\newcommand{\\bra}[1]{\\langle #1|}");
wrt("\\newcommand{\\ket}[1]{|#1\\rangle}");
wrt("\\newcommand{\\braket}[2]{\\langle #1|#2\\rangle}");
wrt("\\newcommand{\\dot}[2]{ #1 \\cdot #2}"); 
wrt("\\newcommand{\\biginner}[2]{\\left\\langle #1,#2\\right\\rangle}");
wrt("\\newcommand{\\mymatrix}[2]{\\left( \\begin{array}{#1} #2\\end{array} \\right)}");
wrt("\\newcommand{\\myvector}[1]{\\mymatrix{c}{#1}}");
wrt("\\newcommand{\\myrvector}[1]{\\mymatrix{r}{#1}}");
wrt("\\newcommand{\\mypar}[1]{\\left( #1 \\right)}");
wrt("\\newcommand{\\mybigpar}[1]{ \\Big( #1 \\Big)}");
wrt("\\newcommand{\\sqrttwo}{\\frac{1}{\\sqrt{2}}}");
wrt("\\newcommand{\\dsqrttwo}{\\dfrac{1}{\\sqrt{2}}} ");
wrt("\\newcommand{\\onehalf}{\\frac{1}{2}} ");
wrt("\\newcommand{\\donehalf}{\\dfrac{1}{2}} ");
wrt("\\newcommand{\\hadamard}{ \\mymatrix{rr}{ \\sqrttwo & \\sqrttwo \\\\ \\sqrttwo & -\\sqrttwo }} ");
wrt("\\newcommand{\\vzero}{\\myvector{1\\\\0}} ");
wrt("\\newcommand{\\vone}{\\myvector{0\\\\1}} ");
wrt("\\newcommand{\\stateplus}{\\myvector{ \\sqrttwo \\\\  \\sqrttwo } } ");
wrt("\\newcommand{\\stateminus}{ \\myrvector{ \\sqrttwo \\\\ -\\sqrttwo } } ");
wrt("\\newcommand{\\stateplusket}{ \\sqrttwo \\ket{0} +  \\sqrttwo \\ket{1} } ");
wrt("\\newcommand{\\stateminusket}{ \\sqrttwo \\ket{0} -  \\sqrttwo \\ket{1} } ");
wrt("\\newcommand{\\myarray}[2]{ \\begin{array}{#1}#2\\end{array}} ");
wrt("\\newcommand{\\I}{ \\mymatrix{rr}{1 & 0 \\\\ 0 & 1}  } ");
wrt("\\newcommand{\\X}{ \\mymatrix{cc}{0 & 1 \\\\ 1 & 0}  } ");
wrt("\\newcommand{\\Z}{ \\mymatrix{rr}{1 & 0 \\\\ 0 & -1}  } ");
wrt("\\newcommand{\\Htwo}{ \\mymatrix{rrrr}{ \\frac{1}{2} & \\frac{1}{2} & \\frac{1}{2} & \\frac{1}{2} \\\\ \\frac{1}{2} & -\\frac{1}{2} & \\frac{1}{2} & -\\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{1}{2} & -\\frac{1}{2} & -\\frac{1}{2} \\\\ \\frac{1}{2} & -\\frac{1}{2} & -\\frac{1}{2} & \\frac{1}{2} } } ");
wrt("\\newcommand{\\CNOT}{ \\mymatrix{cccc}{1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0} } ");
wrt("\\newcommand{\\norm}[1]{ \\left\\lVert #1 \\right\\rVert }");
wrt("\\newcommand{\\pstate}[1]{ \\lceil \\mspace{-1mu} #1 \\mspace{-1.5mu} \\rfloor }");
wrt("\\newcommand{\\faircoin}{ \\mymatrix{rr}{ \\onehalf & \\onehalf \\\\ \\onehalf & \\onehalf }} ");
wrt("$");


function qworld_header(title_str) {
	wrt("<title>Exercises for "+title_str+"</title>");
	wrt(`
		<style> hr{border: 0.5px solid grey;} body{font-family:verdana;} h2{color:#0000aa;}</style>
		<table style="font-family:monospace;" width="100%"><tr> 
			<td  style="text-align:left;">
				<a href="http://qworld.lu.lv" target="_blank"><img src="qworld.jpg" width="30%" align="left"> </a> </td>
			<td>&nbsp;</td>
			<td style="vertical-align:text-middle;text-align:right;">
				<table><tr>
					<td> Visit</td>
					<td><a href="http://qworld.lu.lv" target="_blank"><img src="web-logo.png" width="35px"></a></td>
					<td width="30pt"></td>
					<td> Join</td>
					<td><a href="https://qworldworkspace.slack.com/" target="_blank"><img src="slack-icon.png" width="80px"></a></td>
					<td width="30pt"></td>
					<td>Follow</td>
					<td><a href="https://www.facebook.com/qworld19/" target="_blank"><img src="facebook-icon.png" width="40px"></a></td>
					<td><a href="https://twitter.com/QWorld19" target="_blank"><img src="twitter-icon.png" width="40px"></a></td>
				</tr></table>
			</td>     
		</tr></table>`
	);
	wrt("<hr>");
	wrt("<center><font size='-1' style='color:#0000bb'><i>(This pages uses <a href='https://www.mathjax.org/' target='_blank'>MathJax</a> to express mathematical expressions <u>requiring internet connection</u>.)</i></font></center>");
	wrt("<h2 align='center'>Exercises for "+title_str+"</h2>");
}


var counter = 0; 
var user_answers = [];
var option_tags = ['a','b','c','d','e'];
var option_counter = 0;

function print_br() {
	wrt("<br>");
}
function gid(pid) {
	return document.getElementById(pid);
}
function gname(pname) {
	return document.getElementsByName(pname);
}

function start_div() {
	counter++;
	wrt("<div id='div"+counter+"' >"+counter+".");
	option_counter = 0;
}
function end_div() {
	wrt("</div>");
	wrt("<hr>");		
}
function print_answer(t_or_f,answer) {
	wrt("&nbsp;&nbsp;&nbsp;&nbsp;");
	wrt("<input type='radio' name='radio"+counter+"' value='"+t_or_f+"'>");
	wrt("<b>"+option_tags[option_counter]+")</b> ");
	wrt(answer);
	option_counter++;
}



function print_check_now() {
	wrt("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	wrt("<input type='button' id='button"+counter+"' value='check now' style='background-color:#ffffff;' onclick='check_now("+counter+")'>")
}
function print_check_all() {
	wrt("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	wrt("<input type='button' value='check all answers' style='background-color:#ffffff;' onclick='check_all()'>");	
	wrt("<font id='result'></font>");
	print_br();
	print_br();
	print_br();
}

function is_answer_correct(pcounter){
	var answers = gname("radio"+pcounter);
	for (var i=0;i<answers.length;i++) {
		if (answers[i].checked) {
			if (answers[i].value=="1") {
				return 1;
			}
			return 0;
		}
	}
	return -1;
}
function check_now(pcounter) {
	var answer_status = is_answer_correct(pcounter);
	if (answer_status==1) {
		gid("button"+pcounter).style.backgroundColor="#00ff00";
		gid("button"+pcounter).value = "correct";
		gid("button"+pcounter).disables=true;
		disable_answer(pcounter);
		user_answers[pcounter-1] = 1;
	}
	else if (answer_status==0) {
		gid("button"+pcounter).style.backgroundColor="ff0000";
		gid("button"+pcounter).value = "check again";
		user_answers[pcounter-1] = 0;
	}
	else {
		gid("button"+pcounter).style.color="0000ff";
		gid("button"+pcounter).value = "pick an answer";		
	}
	print_user_score()
}
function disable_answer(pcounter) {
	var answers = gname("radio"+pcounter);
	for (var i=0;i<answers.length;i++) {
		answers[i].disabled = true;
	}
}
function check_all() {
	for (var i=1;i<=counter;i++) {
		if (user_answers[i-1] == 0) {
			check_now(i);
		}
	}
	print_user_score()
}

function inialize_user_answers() {
	for (var i=0;i<counter;i++) {
		user_answers[i] = -1;
	}
}
function print_user_score() {
	var correct = 0, incorrect = 0, empty = 0;
	for (var i=0;i<counter;i++) {
		if (user_answers[i]==-1) empty++;
		else if (user_answers[i]==0) incorrect++;
		else correct++;
	}
	var result_text = "";
	result_text+="&nbsp;&nbsp;&nbsp;&nbsp; <b>Score:</b> ";
	result_text+="<b style='color:green;'>"+correct+"</b> correct answer(s), ";
	result_text+="<b style='color:red;'>"+incorrect+"</b> incorrect answer(s), and ";
	result_text+="<b style='color:blue;'>"+empty+"</b> no answer(s). ";
	gid('result').innerHTML = result_text;
}
