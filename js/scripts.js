$(document).ready(function() {
    const copyToClipboard = _ => {
        let temp = $('<input id="huh">');
        $('body').append(temp);
        $('#huh').val('donaldsonenglish@delawyers.net');
        $('#huh').select();
        document.execCommand('copy');
        temp.remove();
        alert('donaldsonenglish@delawyers.net copied to clipboard.')
      }

      $('.emailCopied').click(function() {
        copyToClipboard();
      });
});
