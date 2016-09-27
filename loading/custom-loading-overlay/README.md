# jquery-quickspin
Quickly add a spinner to any html element. 

<h4>Adding a spinner</h4>
<code>var spinner = $element.qspin(options);</code>
<p>This gives you the newly created spinner item.</p> 
<p>options:<br/>
<code>options = {
    background: 'white',
    spinnerImage: "19.gif",
    task: 'add',
    debug: true
}</code><br/>
background = 'transparent' is default. The background color of the image ( the spinner gif ) wrapper. <br/>
spinnerImage = Has to be provided. The path to your spinner gif.<br/>
task = 'add' is default. Can be 'rem' to remove the spinner.<br/>
debug = false is default<br/>
</p>