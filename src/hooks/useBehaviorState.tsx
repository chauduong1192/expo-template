import { useState } from 'react';

/**
 * Represents the state of a behavior, which can be one of the following:
 * - "idle": The behavior is in its default state.
 * - "hovered": The behavior is being hovered over.
 * - "focused": The behavior is currently focused.
 * - "pressed": The behavior is being pressed.
 */
export type BehaviorState = 'idle' | 'hovered' | 'focused' | 'pressed';

export interface BehaviorStateOptions {
  onUpdate?: (state: BehaviorState) => void;
}

/**
 * Interface representing the return value of a behavior state hook.
 * @interface BehaviorStateReturn
 * @property {BehaviorState} state - The current state of the behavior.
 * @property {() => void} handleHoverIn - Function to handle hover in event.
 * @property {() => void} handleHoverOut - Function to handle hover out event.
 * @property {() => void} handleFocusIn - Function to handle focus in event.
 * @property {() => void} handleFocusOut - Function to handle focus out event.
 * @property {() => void} handlePressIn - Function to handle press in event.
 * @property {() => void} handlePressOut - Function to handle press out event.
 */
export interface BehaviorStateReturn {
  state: BehaviorState;
  handleHoverIn: () => void;
  handleHoverOut: () => void;
  handleFocusIn: () => void;
  handleFocusOut: () => void;
  handlePressIn: () => void;
  handlePressOut: () => void;
}

/**
 * Custom React hook that provides state and event handlers for managing the hover, focus, and active states of an element.
 * @returns {BehaviorStateReturn} An object containing the current state and event handlers.
 */
export const useBehaviorState = ({
  onUpdate,
}: BehaviorStateOptions = {}): BehaviorStateReturn => {
  const [state, setState] = useState<BehaviorState>('idle');

  /**
   * Handler for hover-in event.
   */
  const handleHoverIn = () => {
    setState('hovered');
    onUpdate?.('hovered');
  };

  /**
   * Handler for hover-out event.
   */
  const handleHoverOut = () => {
    setState('idle');
    onUpdate?.('idle');
  };

  /**
   * Handler for focus-in event.
   */
  const handleFocusIn = () => {
    setState('focused');
    onUpdate?.('focused');
  };

  /**
   * Handler for focus-out event.
   */
  const handleFocusOut = () => {
    setState('idle');
    onUpdate?.('idle');
  };

  /**
   * Handler for press-in event.
   */
  const handlePressIn = () => {
    setState('pressed');
    onUpdate?.('pressed');
  };

  /**
   * Handler for press-out event.
   */
  const handlePressOut = () => {
    setState('idle');
    onUpdate?.('idle');
  };

  return {
    state,
    handleHoverIn,
    handleHoverOut,
    handleFocusIn,
    handleFocusOut,
    handlePressIn,
    handlePressOut,
  };
};
