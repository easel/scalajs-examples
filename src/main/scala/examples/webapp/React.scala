package examples.webapp

import org.scalajs.dom.Element

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

/**
  * Created by erik on 10/19/16.
  */
@js.native
trait ReactElement extends js.Any {
  
}

@js.native
@JSImport("react", JSImport.Namespace)
object React extends js.Object {
  def createElement(name: String, attrs: js.Object, children: js.Any): ReactElement = js.native
}

@js.native
@JSImport("react-dom", JSImport.Namespace)
object ReactDOM extends js.Object {
  def render(component: ReactElement, element: Element): Unit = js.native
}
