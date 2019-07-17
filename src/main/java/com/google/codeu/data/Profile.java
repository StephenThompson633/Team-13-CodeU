/*
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.codeu.data;

import java.util.UUID;
import java.util.List;

/** A single user's profile. */
public class Profile {

  private UUID id;
  private String user;
  private String name;
  private String handle;
  private String website;
  private String textures;
  private String photo;

  /**
   * Constructs a new {@link Profile} posted by {@code user} with content. Generates a
   * random ID.
   */
   public Profile(String user) {
     this(UUID.randomUUID(), user, "", "", "", "", "");
   }

  public Profile(String user, String name, String handle, String website, String textures, String photo) {
    this(UUID.randomUUID(), user, name, handle, website, textures, photo);
  }

  public Profile(UUID id, String user, String name, String handle, String website, String textures, String photo) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.handle = handle;
    this.website = website;
    this.textures = textures;
    this.photo = photo;
  }

  public UUID getId() {
    return this.id;
  }

  public String getUser() {
    return this.user;
  }

  public String getName() {
    return this.name;
  }

  public String getHandle() {
    return this.handle;
  }

  public String getWebsite() {
    return this.website;
  }

  public String getTextures() {
    return this.textures;
  }

  public String getPhoto() {
    return this.photo;
  }

  public void setAttributes(String name, String handle, String website, String textures, String photo) {
    this.name = name;
    this.handle = handle;
    this.website = website;
    this.textures = textures;
    this.photo = photo;
  }

}
