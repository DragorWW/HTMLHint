HTMLHint.addRule({
    id: 'indent',
    description: 'Do not mix tabs and spaces for indentation.',
    init: function(parser, reporter, options){
        var self = this;
        var arrRules = {
            'tab': {
                'regId': / +/g,
                'message': 'use only tabs for indentation.'
            },
            'space': {
                'regId': /\t+/g,
                'message': 'use only spaces for indentation.'
            }
        }, rule;
        if(typeof options === 'string'){
            rule = arrRules[options];
        } else {
            rule = options;
        }
        parser.addListener('text', function(event){
            var raw = event.raw;
            var reIndent = rule.regId;
            var match = reIndent.exec(raw);
            if (match) {
                reporter.warn(rule.message, 1, 1, self, event.raw);

            }
        });
    }
});