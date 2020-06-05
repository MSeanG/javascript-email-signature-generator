const markupDirections= {
  calLback: () => {
    return console.log('directions callback')
  },
  render: () => {
    const instructions = document.querySelector('div.instructins');
    let markup = `
    <div class="instructions" style="text-align: center">
      <p style="margin:1rem .5rem;">Pick your platform below and follow the instructions to "install" your new signature. Signatures <strong>must</strong> be installed on <strong style="text-decoration: underline;">all</strong> communication devices – iPad, iPhone and Outlook –  and <strong>must</strong> be included in "new" emails <strong>and</strong> "reply/forward" emails.</p>
      <!--<p style="margin:1rem .5rem; text-align: center;"><a href="#ipad" class="platform">iPad</a> | <a href="#iphone" class="platform">iPhone</a> | <a href="#outlook" class="platform">Outlook</a></p>-->
      <p style="margin:1rem .5rem; text-align: center;"><span class="platform">iPad</span> - <span class="platform">iPhone</span> - <span class="platform">Outlook</span></p>

      <div id="ipad" style="text-align: center">
        <h3 style="font-size: 1.5rem; font-weight: bold; width: 100%; text-align: center">iPad Instructions</h3>
          <p style="margin:1rem .5rem;">Open "Settings" on your iPhad and click the "Mail" setting on the left menu, then select "Signature" on the right side.<br><img src="image/ipad_step1.png" width="500" style="margin-top:15px;"/></p>
          <p style="margin:1rem .5rem;">Once in the "Signature" setting, PRESS on the white space on the right side of the screen until the magnifying lens appears. LET GO and you will see a "Copy | Paste" menu appear in place of the magnifier. Select "Paste"<br><img src="image/ipad_step2.png" style="margin-top:15px;width: 100%"/></p>
          <p style="margin:1rem .5rem;">The final step is to "Shake" your device to initiate an undo selection screen and select "Undo" from the "Undo Change Attributes" dialogue box.<br><img src="image/ipad_step3.png" style="margin-top:15px;width: 100%" /></p>
          <h3>You're Done!</h3>
          <p>&nbsp;</p>
        </div>
      
        <div id="iphone" style="text-align: center">
        <h3 style="font-size: 1.5rem; font-weight: bold; width: 100%; text-align: center">iPhone Instructions</h3>
          <p style="margin:1rem .5rem;">Open "Settings" on your iPhone and then find "Mail"<br><img src="image/iphone_step1.png" style="width: 50%"/></p>
          <p style="margin:1rem .5rem;">Once in the "Mail" setting, scroll down and click on "Signature"<br><img src="image/iphone_step2.png" style="width: 50%"/></p>   <p style="margin:30px 0px 10px;">Once in the "Signature" setting, PRESS on the white space until the magnifying lens appears. LET GO and you will see a "Copy | Paste" menu appear in place of the magnifier. Select "Paste"<br><img src="image/iphone_step3.png" style="width: 50%"/></p>
          <p style="margin:1rem .5rem;">The final step is to "Shake" your device to initiate an undo selection screen and select "Undo" from the "Undo Change Attributes" dialogue box.<br><img src="image/iphone_step4.png" style="margin-top:15px;width: 100%" /></p>
          <h3>You're Done!</h3>
          <p>&nbsp;</p>
        </div>
      
        <div id="outlook" style="text-align: center">
          <h3 style="font-size: 1.5rem; font-weight: bold; width: 100%; text-align: center">Outlook Instructions</h3>
          <p style="margin:1rem .5rem;">Open Outlook and Create a "New Email"<br><img src="image/outlook_step1.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;">In the "New Email" toolbar, click the "Signatures" button<br><img src="image/outlook_step2.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;">When the "Signatures" dialogue box opens, Click the "+" to create a new signature<br><img src="image/outlook_step3.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;"><strong>Right Click</strong> the box on the right labeled "Signature". Your Right Click menu will display. Select "Paste":<br><img src="image/outlook_step4.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;"><strong>SAFARI BROWSER USERS ONLY</strong> After pasting your signature, click the clipboard icon that appears in the lower right hand corner of the "Signature" box. Select "Keep Source Formatting": <br><img src="image/outlook_step4_saf.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;"><strong>Double Click</strong> the label "Untitled" under 'Signature name" and type in a helpful lable for your signature:<br><img src="image/outlook_step5.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;"><strong>Select</strong> the newly created signature from the "Replies/forwards:" drop down so that your signature shows on all emails.<br><img src="image/outlook_step5b.png" style="width: 100%"/></p>
          <p style="margin:1rem .5rem;">Close out the "Signature" dialogue box and click "Signture" again on your "New Email" toolbar. You should see your new signature created in the dropdown list. Select it and your signature will display on your new email.<br><img src="image/outlook_step6.png" style="width: 100%"/></p>
          <h3>You're Done!</h3>
          <p>&nbsp;</p>
      </div>
    </div>
    `;
    if (instructions) {
      console.log('instructions exist');
      return
    }
    else {
      return markup
    }
  }
}

export default markupDirections;
