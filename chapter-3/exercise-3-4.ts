import { Stack } from './exercise-3-2';

class TowerOfHanoi {
    towers = [
        new Stack(),
        new Stack(),
        new Stack(),
    ];

    constructor(N: number) {
      for (let n = N; n > 0; n--)
          this.towers[0].push(n);
    }

    toString() {
        let str = '--------------------';
        for (let i = 0; i < 3; i++)
            str += '\n' + this.towers[i].toString();
        return str;
    }

    solve(skip = 2) {
        console.log(this.toString());

        if (this.towers[0].isEmpty() && this.towers[1].isEmpty())
            return;

        if (skip === 0) {
            if (!this.towers[1].isEmpty()) {
                if (this.towers[2].isEmpty() || this.towers[1].top() < this.towers[2].top()) {
                    this.towers[2].push(this.towers[1].pop());
                    return this.solve(2);
                }
                if (this.towers[0].isEmpty() || this.towers[1].top() < this.towers[0].top()) {
                    this.towers[0].push(this.towers[1].pop());
                    return this.solve(0);
                }
            }
            if (!this.towers[2].isEmpty()) {
                if (this.towers[0].isEmpty() || this.towers[2].top() < this.towers[0].top()) {
                    this.towers[0].push(this.towers[2].pop());
                    return this.solve(0);
                }
                if (this.towers[1].isEmpty() || this.towers[2].top() < this.towers[1].top()) {
                    this.towers[1].push(this.towers[2].pop());
                    return this.solve(1);
                }
            }
        }
        if (skip == 1) {
            if (!this.towers[0].isEmpty()) {
                if (this.towers[1].isEmpty() || this.towers[0].top() < this.towers[1].top()) {
                    this.towers[1].push(this.towers[0].pop());
                    return this.solve(1);
                }
                if (this.towers[2].isEmpty() || this.towers[0].top() < this.towers[2].top()) {
                    this.towers[2].push(this.towers[0].pop());
                    return this.solve(2);
                }
            }
            if (!this.towers[2].isEmpty()) {
                if (this.towers[0].isEmpty() || this.towers[2].top() < this.towers[0].top()) {
                    this.towers[0].push(this.towers[2].pop());
                    return this.solve(0);
                }
                if (this.towers[1].isEmpty() || this.towers[2].top() < this.towers[1].top()) {
                    this.towers[1].push(this.towers[2].pop());
                    return this.solve(1);
                }
            }
            if (!this.towers[1].isEmpty()) {
                if (this.towers[2].isEmpty() || this.towers[1].top() < this.towers[2].top()) {
                    this.towers[2].push(this.towers[1].pop());
                    return this.solve(2);
                }
                if (this.towers[0].isEmpty() || this.towers[1].top() < this.towers[0].top()) {
                    this.towers[0].push(this.towers[1].pop());
                    return this.solve(0);
                }
            }
        }
        if (skip == 2) {
            if (!this.towers[0].isEmpty()) {
                if (this.towers[1].isEmpty() || this.towers[0].top() < this.towers[1].top()) {
                    this.towers[1].push(this.towers[0].pop());
                    return this.solve(1);
                }
                if (this.towers[2].isEmpty() || this.towers[0].top() < this.towers[2].top()) {
                    this.towers[2].push(this.towers[0].pop());
                    return this.solve(2);
                }
            }
            if (!this.towers[1].isEmpty()) {
                if (this.towers[2].isEmpty() || this.towers[1].top() < this.towers[2].top()) {
                    this.towers[2].push(this.towers[1].pop());
                    return this.solve(2);
                }
                if (this.towers[0].isEmpty() || this.towers[1].top() < this.towers[0].top()) {
                    this.towers[0].push(this.towers[1].pop());
                    return this.solve(0);
                }
            }
        }
    }
}

new TowerOfHanoi(5).solve();
