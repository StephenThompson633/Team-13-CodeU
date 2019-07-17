package com.google.codeu.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.codeu.data.Datastore;
import com.google.codeu.data.Profile;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

/** Handles fetching and saving {@link Message} instances. */
@WebServlet("/profile")
public class ProfileServlet extends HttpServlet {

  private Datastore datastore;

  @Override
  public void init() {
    datastore = new Datastore();
  }

  /**
   * Responds with a JSON representation of {@link Profile} data for a specific user. Responds with
   * an empty array if the user is not provided.
   */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    response.setContentType("application/json");

    String user = request.getParameter("user");

    if (user == null || user.equals("")) {
      // Request is invalid, return empty array
      response.getWriter().println("[]");
      return;
    }

    Profile profile = datastore.getProfile(user);
    Gson gson = new Gson();
    String json = gson.toJson(profile);

    response.getWriter().println(json);
  }

  /** Stores a new {@link Profile}. */

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    UserService userService = UserServiceFactory.getUserService();
    if (!userService.isUserLoggedIn()) {
      response.sendRedirect("/login");
      return;
    }

    String user = userService.getCurrentUser().getEmail();
    String name = Jsoup.clean(request.getParameter("name"), Whitelist.simpleText());
    String handle = Jsoup.clean(request.getParameter("handle"), Whitelist.simpleText());
    String website = Jsoup.clean(request.getParameter("website"), Whitelist.simpleText());
    String textures = Jsoup.clean(request.getParameter("textures"), Whitelist.simpleText());
    String photo = Jsoup.clean(request.getParameter("photo"), Whitelist.simpleText());

    Profile profile = new Profile(user, name, handle, website, textures, photo);
    datastore.storeProfile(profile);

    response.sendRedirect("/profile.html?user=" + user);
  }
}
