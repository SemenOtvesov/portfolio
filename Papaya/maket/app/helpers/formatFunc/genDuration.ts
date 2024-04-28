import { Duration } from 'iso8601-duration';

export default function genDuration(time: Duration) {
    let retStr = `
	${format(time.years)}${format(time.months)}${format(time.days)}${format(time.hours)}${format(
        time.minutes,
        true,
    )}${format(time.seconds, false, true)}
	`;

    let prevDateCheck = false;
    function format(t?: number, min?: boolean, sec?: boolean) {
        if (t) {
            if (min || sec) {
                if (t < 10) {
                    if (min) return (prevDateCheck ? '0' : '') + t + ':';
                    setPrevDateCheck();
                    return t;
                }
                setPrevDateCheck();
                return !sec ? t + ':' : t;
            }
            setPrevDateCheck();
            return !sec ? t + ':' : t;
        } else {
            if (sec) {
                return '0';
            }
            if (prevDateCheck) {
                return '0:';
            } else return '';
        }
    }
    function setPrevDateCheck() {
        prevDateCheck = true;
    }

    return retStr;
}
