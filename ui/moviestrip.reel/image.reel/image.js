
var AbstractImage = require("montage/ui/base/abstract-image").AbstractImage;

exports.Image = AbstractImage.specialize( {

    constructor: {
        value: function Image() {
            this.super();
        }
    },

    _src: {
        value: null
    },

    src: {
        set: function (value) {
            if (value !== this._src) {
                this._src = value;
                this.needsDraw = true;
            }
        },
        get: function() {
            return this._src;
        }
    },

    draw: {
        value: function () {
            var src = this._src;
//            if (this._isLoadingImage || this._isInvalidSrc) {
//                src = this.emptyImageSrc;
//            } else {
//                src = this._getRebasedSrc();
//            }

            if (typeof src !== "undefined") {
                this._element.style.backgroundImage = "url(" + src + ")";
            }
        }
    }

});
