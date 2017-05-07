package step_definitions;

import static com.jayway.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/***
 * 
 * @author mrathore 
 *         
 */

//Sample class for automating basic feature of a searchResult related rest API of Princess.com

public class SearchAPISteps {
	public WebDriver driver;
	private Response response;
	private String ENDPOINT_PRINCESS_SEARCH = "http://www.princess.com/find/json/getJsonProducts.do";

	public SearchAPISteps() {
		driver = Hooks.driver;
	}

	@When("^user calls rest api \"(.*?)\"$")
	public void user_calls_rest_api(String arg1) throws Throwable {

		given().when().get(ENDPOINT_PRINCESS_SEARCH).then().assertThat().contentType(ContentType.JSON);
		// response=RestAssured.given().get(ENDPOINT_PRINCESS_SEARCH);
		// assertEquals(response.statusCode(),200);
		// System.out.println("response: " + response.prettyPrint());
	}

	@Then("^user gets status code value as \"(.*?)\"$")
	public void user_gets_status_code_value_as(String arg1) throws Throwable {
		given().when().get(ENDPOINT_PRINCESS_SEARCH).then().assertThat().statusCode(200);
	}

	@Then("^response validates with given schema$")
	public void response_includes_the_following() throws Throwable {
		// response=given().get(ENDPOINT_PRINCESS_SEARCH);
		given().contentType("application/json").when().get(ENDPOINT_PRINCESS_SEARCH).then().assertThat()
				.body(matchesJsonSchemaInClasspath("\\testData\\SearchSchema.json"));

	}

	@Then("^validate all URL on \"(.*?)\" page if any broken$")
	public void validate_all_URL_on_page_if_any_broken(String arg1) throws Throwable {

		List<String> hrefs = new ArrayList<String>();
		List<WebElement> UrlTags = driver.findElements(By.tagName("a"));
		System.out.println("Number of Anchor Tags found on Home page are " + UrlTags.size());
		for (int i = 0; i < UrlTags.size(); i++) {
			if (!UrlTags.get(i).getAttribute("href").equals("")) {
				hrefs.add(UrlTags.get(i).getAttribute("href"));
			}
		}
		System.out.println("Number of not null URL found on Home page are " + hrefs.size());
		for (String href : hrefs) {
			// System.out.println(href);

			response = given().when().get(href);
			if (response.statusCode() != 200) {
				System.out.println("Link " + href + " is Broken with status code" + response.statusCode());
			}
		}
	}

	@Then("^get response header size$")
	public void get_response_header_size() throws Throwable {
		response = given().when().get(ENDPOINT_PRINCESS_SEARCH);
		System.out.println("Response Header Size is " + response.header("Content-Length"));
	}

}
