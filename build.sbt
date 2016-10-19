enablePlugins(ScalaJSPlugin)

name := "Scala.js Examples"

scalaVersion := "2.11.8" // or any other Scala version >= 2.10.2

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.1"

scalaJSModuleKind := ModuleKind.CommonJSModule
