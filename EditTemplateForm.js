 <form>
                                <h6>FILE TYPE & BACKGROUND</h6>
                                <hr/>
                               
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">File Format</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>PNG</option>
                                    <option>JPG</option>
                                    <option>TIFF</option>
                                    <option>PSD</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Backgrpund</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>White</option>
                                    <option>Transparent</option>
                                    <option>Keep Existing</option>
                                    <option>Color</option>
                                    <option>Background Image</option>
                                    </select>
                                </div>
                                <hr/>
                                <br/>
                            {/* -----------------------------------CROPPING & ALIGNMENT------------------------------------------- */}
                                <h6>CROPPING & ALIGNMENT</h6>
                                <hr/>
  
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Size</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>No Change</option>
                                    <option>Aspect Ratio</option>
                                    <option>Exact Size</option>
                                    <option>Crop tightly</option>
                                    <option>Use min/ Max setting</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Aspect Size</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>Square 1:1</option>
                                    <option>Landscape 4:3</option>
                                    <option>Landscape 3:2</option>
                                    <option>Landscape 5:3</option>
                                    <option>Landscape 16:3</option>
                                    <option>Portrait 3:4</option>
                                    <option>Portrait 2:3</option>
                                    <option>Portrait 3:5</option>
                                    <option>Portrait 9:16</option>
                                    <option onClick="extra-component">other</option>
                                    </select>
                                   
                                </div>
                                
                                
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Min / Max Size</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>None</option>
                                    <option>On at least on side</option>
                                    <option>Enforce on both sides</option>
                                    <option>Enforce on both width</option>
                                    <option>Enforce on both height</option>
                                    <option>Enforce on the smallest side</option>
                                    <option>Enforce on the largest side</option>
                                    </select>
                                </div>
                                <hr/>
                                <div>
                                <label for="exampleFormControlSelect1"><h5>Margin</h5></label>
                                <div className="float-right">
                                <Switch style={{justifyContent: "space-between"}}
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            /></div>
                            <span class="status-level"></span>
                            </div>
                            <hr/>

                            <div class="form-group">
                                    <label for="exampleFormControlSelect1">Alignment</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>None</option>
                                    <option>Center</option>
                                </select>
                                </div>
                                <hr/>
                                {/* Model Cropping */}
                                <div >
                                    <h5> Model Cropping</h5>
                                    <hr/>
                                <label for="exampleFormControlSelect1">Enabled</label>
                                <div class="float-right"  >
                                <Switch style={{alignItems: "center"}}
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </div>
                            <span class="status-level"></span>
                            </div>
                            <hr/>
                            <br/>
                            {/* ------------------------------------OTHER SETTINGS-------------------------------------------- */}
                            <h5>
                                OTHER SETTINGS
                            </h5>
                            <hr/>
                            <div>
                                <label>Image prefix / postfix</label>
                                <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Prefix" 
                            aria-label="Prefix" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">filename.jpg</span>
                            </div>
                            </div>
                                    
                                <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">filename</span>
                                </div>
                                <input type="text" placeholder="postfix" class="form-control" aria-label="filename jpg"/>
                                <div class="input-group-append">
                                    <span class="input-group-text">.jpg</span>
                                </div>
                                </div>
                            </div>
                            <hr/>
                            
                            
                            <div class="form-group">
                                    <label for="exampleFormControlSelect1">color Profile</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>keep Original Color Profile</option>
                                    <option>sRGB</option>
                                    <option>AdobeRGB</option> 
                                    <option>CMYK</option> 
                                    </select>
                                </div>
                                <hr/>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Meta Data</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>Remove Meta Data</option>
                                    <option>Keep all</option>
                                    <option>Keep Copyright</option> 
                                    </select>
                                </div>
                                <hr/>

                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Compression</label>
                                    <select class="form-control form-control-lg" id="exampleFormControlSelect1">
                                    <option>None</option>
                                    <option>Lzw</option>
                                     </select>
                                </div>
                                <hr/>
                                {/*------------------------------- Merge Layers---------------------------------- */}
                                <div >
                                   
                                    <hr/>
                                <label for="exampleFormControlSelect1">Merge Layers</label>
                                <div class="float-right"  >
                                <Switch style={{alignItems: "center"}}
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </div>
                            <span class="status-level"></span>
                            </div>
                                
                                <hr/>

                                <label for="exampleFormControlSelect1">Normalize Rotation</label>
                                <div class="float-right"  >
                                <Switch style={{alignItems: "center"}}
                                checked={state.checkedB}
                                onChange={handleSwitch}
                                color="primary"
                                name="checkedB"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            </div>
                            <span class="status-level"></span>
                           
                                
                                <hr/>


                            </form>