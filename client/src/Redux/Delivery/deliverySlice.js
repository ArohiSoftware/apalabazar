import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  data: null,
  pickupData: null,
  warehouseData: null,
  editWarehouseData: null,
  manifestationData: null,
  packingSlipData: null,
  trackingData: null,
  bulkWaybillData: null,
  manifestationFullPayloadData: null,
  editOrderData: null,
  cancelOrderData: null,
  waybillData: null,
  status: 'idle',
  pickupStatus: 'idle',
  warehouseStatus: 'idle',
  editWarehouseStatus: 'idle',
  manifestationStatus: 'idle',
  editOrderStatus: 'idle',
  cancelOrderStatus: 'idle',
  ndrData: null,
  error: null,
  pickupError: null,
  warehouseError: null,
  editWarehouseError: null,
  manifestationError: null,
  editOrderError: null,
  cancelOrderError: null,
};

// Create async thunks for the new APIs

export const fetchPincodeServiceability = createAsyncThunk(
  'delivery/fetchPincodeServiceability',
  async ({ token, filter_codes }) => {
    const response = await axios.get(
      `https://track.delhivery.com/c/api/pin-codes/json/`,
      {
        params: { token, filter_codes },
        headers: { 'Accept': 'application/json' },
      }
    );
    return response.data;
  }
);

export const createPickupRequest = createAsyncThunk(
  'delivery/createPickupRequest',
  async ({ token, pickupData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/fm/request/new/`,
      pickupData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const createWarehouse = createAsyncThunk(
  'delivery/createWarehouse',
  async ({ token, warehouseData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/backend/clientwarehouse/create/`,
      warehouseData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const editWarehouse = createAsyncThunk(
  'delivery/editWarehouse',
  async ({ token, warehouseData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/backend/clientwarehouse/edit/`,
      warehouseData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const createManifestation = createAsyncThunk(
  'delivery/createManifestation',
  async ({ token, manifestationData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/cmu/create.json`,
      manifestationData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const editOrder = createAsyncThunk(
  'delivery/editOrder',
  async ({ token, orderData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/p/edit`,
      orderData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const fetchPackingSlip = createAsyncThunk(
  'delivery/fetchPackingSlip',
  async ({ wbns, token }) => {
    const response = await axios.get(
      `https://track.delhivery.com/api/p/packing_slip`,
      {
        params: { wbns },
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const fetchTrackingData = createAsyncThunk(
  'delivery/fetchTrackingData',
  async ({ waybill, token }) => {
    const response = await axios.get(
      `https://track.delhivery.com/api/v1/packages/json`,
      {
        params: { waybill, token },
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  }
);

export const fetchBulkWaybill = createAsyncThunk(
  'delivery/fetchBulkWaybill',
  async ({ token, count }) => {
    const response = await axios.get(
      `https://track.delhivery.com/waybill/api/bulk/json/`,
      {
        params: { token, count },
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  }
);

export const createManifestationFullPayload = createAsyncThunk(
  'delivery/createManifestationFullPayload',
  async ({ token, payload }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/cmu/create.json`,
      payload,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const updateNDR = createAsyncThunk(
  'delivery/updateNDR',
  async ({ token, payload }) => {
    const response = await axios.post(
      `https://staging-express.delhivery.com/api/p/update`,
      payload,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const cancelOrder = createAsyncThunk(
  'delivery/cancelOrder',
  async ({ token, cancellationData }) => {
    const response = await axios.post(
      `https://track.delhivery.com/api/p/edit`,
      cancellationData,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const fetchWaybill = createAsyncThunk(
  'delivery/fetchWaybill',
  async ({ token }) => {
    const response = await axios.get(
      `https://track.delhivery.com/waybill/api/fetch/json/`,
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

// Create the delivery slice
const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pincode serviceability
      .addCase(fetchPincodeServiceability.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPincodeServiceability.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPincodeServiceability.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle pickup request
      .addCase(createPickupRequest.pending, (state) => {
        state.pickupStatus = 'loading';
      })
      .addCase(createPickupRequest.fulfilled, (state, action) => {
        state.pickupStatus = 'succeeded';
        state.pickupData = action.payload;
      })
      .addCase(createPickupRequest.rejected, (state, action) => {
        state.pickupStatus = 'failed';
        state.pickupError = action.error.message;
      })
      // Handle warehouse creation
      .addCase(createWarehouse.pending, (state) => {
        state.warehouseStatus = 'loading';
      })
      .addCase(createWarehouse.fulfilled, (state, action) => {
        state.warehouseStatus = 'succeeded';
        state.warehouseData = action.payload;
      })
      .addCase(createWarehouse.rejected, (state, action) => {
        state.warehouseStatus = 'failed';
        state.warehouseError = action.error.message;
      })
      // Handle warehouse editing
      .addCase(editWarehouse.pending, (state) => {
        state.editWarehouseStatus = 'loading';
      })
      .addCase(editWarehouse.fulfilled, (state, action) => {
        state.editWarehouseStatus = 'succeeded';
        state.editWarehouseData = action.payload;
      })
      .addCase(editWarehouse.rejected, (state, action) => {
        state.editWarehouseStatus = 'failed';
        state.editWarehouseError = action.error.message;
      })
      // Handle manifestation creation
      .addCase(createManifestation.pending, (state) => {
        state.manifestationStatus = 'loading';
      })
      .addCase(createManifestation.fulfilled, (state, action) => {
        state.manifestationStatus = 'succeeded';
        state.manifestationData = action.payload;
      })
      .addCase(createManifestation.rejected, (state, action) => {
        state.manifestationStatus = 'failed';
        state.manifestationError = action.error.message;
      })
      // Handle order editing
      .addCase(editOrder.pending, (state) => {
        state.editOrderStatus = 'loading';
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.editOrderStatus = 'succeeded';
        state.editOrderData = action.payload;
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.editOrderStatus = 'failed';
        state.editOrderError = action.error.message;
      })
      // Handle fetching packing slip
      .addCase(fetchPackingSlip.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPackingSlip.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.packingSlipData = action.payload;
      })
      .addCase(fetchPackingSlip.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle tracking data fetching
      .addCase(fetchTrackingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrackingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trackingData = action.payload;
      })
      .addCase(fetchTrackingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle bulk waybill fetching
      .addCase(fetchBulkWaybill.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBulkWaybill.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bulkWaybillData = action.payload;
      })
      .addCase(fetchBulkWaybill.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle full payload manifestation creation
      .addCase(createManifestationFullPayload.pending, (state) => {
        state.manifestationStatus = 'loading';
      })
      .addCase(createManifestationFullPayload.fulfilled, (state, action) => {
        state.manifestationStatus = 'succeeded';
        state.manifestationFullPayloadData = action.payload;
      })
      .addCase(createManifestationFullPayload.rejected, (state, action) => {
        state.manifestationStatus = 'failed';
        state.manifestationError = action.error.message;
      })
      // Handle NDR update
      .addCase(updateNDR.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateNDR.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ndrData = action.payload;
      })
      .addCase(updateNDR.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle order cancellation
      .addCase(cancelOrder.pending, (state) => {
        state.cancelOrderStatus = 'loading';
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.cancelOrderStatus = 'succeeded';
        state.cancelOrderData = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.cancelOrderStatus = 'failed';
        state.cancelOrderError = action.error.message;
      })
      // Handle waybill fetching
      .addCase(fetchWaybill.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWaybill.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.waybillData = action.payload;
      })
      .addCase(fetchWaybill.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the actions and reducer
export default deliverySlice.reducer;
