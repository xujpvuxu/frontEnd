window.onload = function () {
    Vue.createApp({
        data: function () {
            return {
                blocks: [{
                    name: 'oddOrEven',
                    isActive: false
                }, {
                    name: 'MaxTwoNumber',
                    isActive: false
                }, {
                    name: 'multiplication',
                    isActive: false
                }, {
                    name: 'triangle',
                    isActive: false
                }, {
                    name: 're-triangle',
                    isActive: false
                }, {
                    name: 'prime',
                    isActive: false
                }],
                input1: '',
                input2: '',
                result: '',
                result2: [],
                primeIndex: [{
                    index: 2,
                    isPrime: true
                }]

            }
        },
        methods: {
            switchBlock: switchBlock,
            oddOrEven: oddOrEven,
            maxTwo: maxTwo,
            multiplication: multiplication,
            triangle: triangle,
            reverseTriangle: reverseTriangle,
            primeNumber: primeNumber

        },
        mounted: function () {},
    }).mount('#app');

    function switchBlock(self) {
        this.input1 = '';
        this.input2 = '';
        this.result = '';
        this.result2 = [];
        this.blocks.forEach(i => {
            i.isActive = false;
        });
        this.blocks.find(x => x.name === self).isActive = true;
    }

    function oddOrEven() {
        if (this.input1 != '') {
            this.result = this.input1 % 2 === 0 ? "偶數" : "奇數";
        }

    }

    function maxTwo() {
        if (this.input1 != '' && this.input2 != '') {

            if (this.input1 === this.input2) {
                this.result = "相等";
            } else if (this.input1 > this.input2) {
                this.result = this.input1;
            } else {
                this.result = this.input2;
            }
        }
    }

    function multiplication() {
        this.result2 = [];
        const totalNumber = 9;
        for (let i = 1; i <= totalNumber; i++) {
            for (let j = 1; j <= totalNumber; j++) {
                this.result2.push(`${i} × ${j} = ${i*j}`);
            }
        }
    }

    function triangle() {
        this.result2 = [];
        if (this.input1 != '') {
            for (let i = 1; i <= this.input1; i++) {
                let start = "*";
                this.result2.push(`${start.repeat(i)}`);
            }
        }

    }

    function reverseTriangle() {
        this.result2 = [];
        if (this.input1 != '') {
            for (let i = 1; i <= this.input1; i++) {
                let space = "-";
                let start = "*";
                this.result2.push(`${space.repeat(i-1)}${start.repeat(this.input1-i)}`);
            }
        }
    }

    function primeNumber() {
        for (let i = this.primeIndex[this.primeIndex.length - 1].index + 1; i <= this.input1; i++) {
            let isPrime = true;

            let max = Math.sqrt(i);
            for (let j = 2; j <= max; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    this.primeIndex.push({
                        index: i,
                        isPrime: false
                    });
                    break;
                }
            }
            if (isPrime) {
                this.primeIndex.push({
                    index: i,
                    isPrime: true
                });
            }

        }
        this.result2= this.primeIndex.filter(x => x.isPrime).map(x => {
            return x.index
        });
    }
}