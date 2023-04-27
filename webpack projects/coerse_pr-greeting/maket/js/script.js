import '@maket/css/style.css'
import { Routing } from '@core/routing/Routing'
import { GreetingRoot } from '@core/routs/GreetingRoot'
import { ExcelRoot } from '@core/routs/ExcelRoot'

const routing = new Routing('#wrap', {
    greeting: GreetingRoot,
    excel: ExcelRoot
})