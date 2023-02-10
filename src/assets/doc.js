class docum {
    constructor(data) {
        this.data = data;
    }

    id(params) {
        return document.getElementById(params)
    }

    qall(params) {
        return document.querySelectorAll(params)
    }

    classname(params) {
        return document.getElementsByClassName(params)
    }

    tag(params) {
        return document.getElementsByTagName(params)
    }
    preload(state) {
        if (state == 'on') {
            doc.id('preload').classList.add('active');
        } else {
            doc.id('preload').classList.remove('active');
        }
    }
    cl(msg) {
        console.log(msg)
    }
}

const doc = new docum();

export default doc;