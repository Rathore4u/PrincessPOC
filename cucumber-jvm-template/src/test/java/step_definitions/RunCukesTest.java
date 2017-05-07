package step_definitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/***
 * 
 * @author mrathore 
 * 
 */

//this class contains Cucumber Options for feature run.

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", plugin = { "pretty", "html:target/cucumber-html-report",
		"json:target/cucumber-report.json" }, tags = { "@api" })
public class RunCukesTest {

}