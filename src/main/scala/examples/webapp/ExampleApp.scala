package examples.webapp

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExport, ScalaJSDefined}

@ScalaJSDefined
@JSExport("ExampleApp")
object ExampleApp extends js.Object {
  def main(): Unit = {
    ReactDOM.render(
      React.createElement("p", js.Dynamic.literal(), "Hello World from React.js!"),
      dom.document.getElementById("app"))

    dom.console.log("Hello world!")
  }
}
